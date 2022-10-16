/**
 *
 * @param {Object} data array
 * @returns {string}  strings if data contains tags. If not this returns "0 tags"
 * @example
 * ```js
 * fetchCall(endpoint, options).then(data => {
 * tagContainer.textContent = checkForTags(data.tags)
 * })
 * ```
 */

export const checkForTags = (data) => {
    if (data.length === 0) {
        return "<i>0 tags</i>";
    }
    return "tags:" + " " + data.join(", ");
};
