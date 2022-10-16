/**
 * adds 'collapse' to the classList of the container you want to hide
 * @param {Object} btn element
 * @param {Object} wall element
 * @param {Object} follows element
 * @example
 * ```js
 * profileButtons(contactBtn, feedContainer, feedBtn)
 * ```
 */

export const profileButtons = (btn, wall, follows) => {
    btn.addEventListener("click", () => {
        if (follows.classList.contains("collapse")) {
            follows.classList.remove("collapse");
            wall.classList.add("collapse");
        }
    });
};
