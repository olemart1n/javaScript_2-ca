/**
 *
 * @param {Object} data array
 * @returns {string}  imageurl if data contains an url. If not this returns an emtpy string
 * @example
 * ```js
 * fetchCall(endpoint, options).then(data => {
 * img.src = checkForMedia(data)
 * })
 * ```
 */

export const checkForMedia = (data) => {
    if (data.substring(5, 0) !== "https") {
        return "";
    }
    return `<img src="${data}" class="index-post-img rounded" >` ?? "";
};
