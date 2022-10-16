import { fetchCall, endpoints, fetchOptions } from "../api.mjs";
const { posts } = endpoints;
const { react } = fetchOptions;
const emojiModal = document.querySelector("#emoji-modal");
const modal = new bootstrap.Modal(emojiModal);
export const openEmojiPicker = () => {
    const smiley = document.querySelectorAll(".smiley");
    smiley.forEach((element, index) => {
        element.addEventListener("click", () => {
            localStorage.setItem("smileyId", element.dataset.getButton);
        });
    });
};

export const checkForsmileyClick = () => {
    const picker = document.querySelector("emoji-picker");
    picker.addEventListener("emoji-click", (event) => {
        const postId = localStorage.getItem("smileyId");
        const reactionContiner = document.querySelector(`.reactions-container${postId}`);
        if (reactionContiner.innerHTML.includes(event.detail.unicode)) {
            const counter = document.getElementById(postId + event.detail.unicode);
            const counterString = Number(counter.textContent);
            counter.textContent = counterString + 1;
        } else {
            const div = document.createElement("div");
            const b = document.createElement("b");
            b.textContent = 1;
            b.style.fontSize = "small";
            div.append(b);
            div.insertAdjacentHTML("beforeend", event.detail.unicode);
            div.classList.add("p-1");
            div.style.cursor = "pointer";
            reactionContiner.append(div);
        }
        putEmoji(postId, event.detail.unicode);
        modal.hide();
        localStorage.removeItem("smileyId");
    });
};

const putEmoji = (id, symbol) => {
    fetchCall(`${posts}${id}/react/${symbol}`, react).then((data) => console.log(data));
};

// SHOULD BE POSSIBLE TO CLICK ECISTING REACTIONS AND ADD TO THE CURRENT VALUE
