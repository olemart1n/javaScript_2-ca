import { fetchCall, endpoints, fetchOptions } from "../api.mjs";
const { postswithac, posts } = endpoints;
const { getWithJwt, react } = fetchOptions;

export const existingReactions = () => {
    fetchCall(postswithac, getWithJwt).then((data) => {
        data.forEach((element) => {
            const emojiBox = document.querySelector(`.reactions-container${element.id}`);
            const reacts = element.reactions;
            reacts.forEach((element) => {
                const div = document.createElement("div");
                const b = document.createElement("b");
                b.textContent = element.count;
                b.style.fontSize = "small";
                b.id = element.postId + element.symbol;
                div.append(b);
                div.insertAdjacentHTML("beforeend", element.symbol);
                div.classList.add("p-1");
                div.style.cursor = "pointer";
                div.id = element.symbol;
                emojiBox.append(div);
                div.addEventListener("click", () => {
                    fetchCall(`${posts}${element.postId}/react/${element.symbol}`, react).then(
                        (data) => console.log(data)
                    );
                    let counterVal = element.count;
                    b.innerText = counterVal + 1;
                });
            });
        });
    });
};
