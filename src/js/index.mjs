import { fetchCall, endpoints, fetchOptions } from "./api.mjs";
import { renderHtml } from "./feed/html.mjs";
import { commentList } from "./afterRendered/comments.mjs";
import {
    searchForComments,
    searchForTags,
    searchForPictures,
    searchForId,
    searchForTitle,
} from "./filters.mjs";
import { logOutClick } from "./helpers/logout.js";
import { sharePost } from "./formListeners/newPost.mjs";
import { openEmojiPicker, checkForsmileyClick } from "./afterRendered/sendEmoji.mjs";
import { existingReactions } from "./afterRendered/checkForReacts.mjs";
const { postswithac, updateMedia } = endpoints;
const { getWithJwt, update } = fetchOptions;
const searchForm = document.querySelector("#search-form");
const filterBtnPictures = document.querySelector("#filter-pictures");
const filterBtnTags = document.querySelector("#filter-tags");
const filterBtnComments = document.querySelector("#filter-comments");
const searchInput = document.querySelector("#search-input");
const postContainer = document.querySelector(".index-post-box");
const spinner = document.querySelector(".spinner-border");

logOutClick();
sharePost();
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (/\d/.test(searchInput.value)) {
        searchForId();
    } else {
        searchForTitle();
    }
});

fetchCall(postswithac, getWithJwt).then((data) => {
    renderHtml(postContainer, data);
    commentList();
    existingReactions();
    openEmojiPicker();
    checkForsmileyClick();
    spinner.classList.add("collapse");
});
filterBtnPictures.addEventListener("click", () => {
    searchForPictures();
});
filterBtnTags.addEventListener("click", () => {
    searchForTags();
});
filterBtnComments.addEventListener("click", () => {
    searchForComments();
});
