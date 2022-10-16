export const endpoints = {
    base: "https://nf-api.onrender.com/api/v1/social/",
    register: "auth/register",
    login: "auth/login",
    posts: "posts/",
    postswithac: "posts?_author=true&_comments=true&_reactions=true",
    loggedInUser: `profiles/${localStorage.getItem("socialName")}`,
    updateMedia: "profiles/" + localStorage.getItem("socialName") + "/media",
    makeComment: "posts/<id>/comment",
    profiles: "profiles",
};
export const { base } = endpoints;
/**
 * FETCH REQUEST
 * @param {string} endpoint string
 * @param {Object} header object with header options
 * @returns {promise} returns data from an api
 * @example
 * ```js
 * fetchCall(endpoint, options).then(data => {
 * console.log(data)
 * })
 * ```
 */
export const fetchCall = async (endpoint, header) => {
    try {
        const request = await fetch(base + endpoint, header);
        const response = await request.json();
        return response;
    } catch (error) {
        console.error(error);
    }
};

// OPTIONS FOR THE SECOND PARAMETER IN FETCHCALLS
const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("socialToken")}`,
};

export const fetchOptions = {
    registerLogin: {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: {},
    },
    getWithJwt: {
        method: "GET",
        headers: header,
    },
    entry: {
        method: "POST",
        headers: header,
        body: {},
    },
    update: {
        method: "PUT",
        headers: header,
        body: {},
    },
    deletePost: {
        method: "DELETE",
        headers: header,
    },
    react: {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("socialToken")}`,
        },
    },
};
