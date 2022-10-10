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
    return `<i class="fa-solid fa-user fa-xl m-2 p-0 col-1"></i>`;
  } else {
    return `<img src="${data?.avatar}" class="col-3 rounded-5 m-2" style="max-height: 45px; max-width: 45px">`;
  }
};
