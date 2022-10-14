import { endpoints, fetchCall, fetchOptions } from "../api.mjs";
import { loggedInPosts } from "../profile/renderPosts.mjs";
const { update, getWithJwt } = fetchOptions;
const { posts, postswithac } = endpoints;
const updateForm = document.querySelector("#update-form");
const postsContainer = document.querySelector("#posts");

export const updatePost = () => {
    updateForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const inputs = Object.fromEntries(form.entries());
        const { title, tags, body, media } = inputs;
        if (media.length < 5) {
            update.body = JSON.stringify({ title, tags, body });
        } else {
            update.body = JSON.stringify(inputs);
        }
        fetchCall(posts + e.currentTarget.getAttribute("postId"), update).then((data) => {
            console.log(data);
            updateForm.reset();
            postsContainer.innerHTML = "";
            fetchCall(
                "posts?_author=true&_comments=true&_reactions=true&limit=500",
                getWithJwt
            ).then((data) => {
                const checkForPosts = data.filter((data) => {
                    return data.author.name === localStorage.getItem("socialName");
                });
                if (checkForPosts.length === 0) {
                    const noPosts = document.querySelector("#no-posts-yet");
                    noPosts.classList.remove("collapse");
                }
                console.log(checkForPosts);
                loggedInPosts(postsContainer, checkForPosts);
            });
        });
    });
};
