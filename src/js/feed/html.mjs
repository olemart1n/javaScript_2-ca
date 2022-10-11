import { checkForMedia } from "../helpers/checkForMedia.js";
import { checkForTags } from "../helpers/checkForTags.js";
import { checkForAvatar } from "../helpers/checkForAvatar.js";
import { timeAgo } from "../helpers/checkTimeAgo.js";
// import { checkForReactions } from "../helpers/checkForReacts.mjs";

export const htmlToRender = (
    div,
    { author, created, title, tags, body, id, comments, _count, media, reactions }
) => {
    div.insertAdjacentHTML(
        "beforeend",
        `<div class="m-0 p-0">
          <div class="d-flex flex-column flex-sm-row align-items-center text-muted mb-5 mt-1 pt-3 pb-3 border-top bg-primary">
          ${checkForAvatar(author)}
          <strong class="d-block text-gray-dark col">${author.name}</strong>
          <p class="text-muted col-sm-3 fs-6"style="font-size: 0.7em">${timeAgo(created)}</p>
        </div>
        <div class="m-2 ">
          <h5>${title}</h5>
          <p> ${checkForTags(tags)}</p><br>
          <p>${body}</p>
          ${checkForMedia(media)}
        </div>
        <div class="d-flex">
        <button class="text-grey-ish btn p-2 flex-grow-1 comment-button" data-comment-button="${id}">Comments &darr; (<span id="comment-counter${id}">${
            comments.length
        }</span>)
        </button>
        <div class="reactions-container${id} emojibox d-flex align-content-center flex-row-reverse flex-wrap w-50"></div>
        <div class="p-2">
          <button class="btn smiley d-flex align-items-center p-0" data-get-button="${id}" data-bs-toggle="modal" data-bs-target="#emoji-modal" style="font-size: 25px; max-height: 30px;">🙂</button>
        </div>
          </div>
          <!-- comment section. collapsed by default -->
          <div class="m-2 collapse comment-section text-center" id="${id}">
          </div>
        `
    );
};

export const renderHtml = (div, apiData) => {
    apiData.forEach((element) => {
        htmlToRender(div, element);
    });
};

{
    /* <emoji-picker></emoji-picker>; */
}
