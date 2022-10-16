/**
 *
 * @param {Object} data array
 * @returns {string}  imageurl if data contains an url. If not this returns an icon
 * @example
 * ```js
 * fetchCall(endpoint, options).then(data => {
 * div.textContent = checkForAvatar(data)
 * })
 * ```
 */

export const checkForAvatar = (data) => {
    if (data?.avatar?.substring(5, 0) !== "https") {
        return `<div class="col col-sm-2"><i class="fa-solid fa-user fa-xl m-2 p-0" ></i></div>`;
    } else {
        return `<div class="col col-sm-2"><img src="${data?.avatar}" class="rounded-5 m-2" style="height: 45px; width: 45px"></div>`;
    }
};
