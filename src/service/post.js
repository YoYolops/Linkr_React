import API from './api.js';

function head(token) {
    const head = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return head;
}

async function getPosts(token) {
    const response = await API.get("/posts", head(token)).catch(() => false);

    if(response) return response.data;
    return false;
}

async function getLikedPosts(token) {
    const response = await API.get("/posts/liked", head(token))
        .catch(() => false);

    if(response) return response.data;
    else return false;
}

async function getMyPosts(token, userId) {
    const response = await API.get(`/users/${userId}/posts`, head(token))
        .catch(() => false);

    if(response) return response.data;
    return false;
}

async function getHashtags (token) {
    const response = await API.get("/hashtags/trending", head(token))
        .catch(() => false)
    if(response) return response.data;
    return false
}

async function getHashtagsPosts(token, hashtag) {
    const response = await API.get(`/hashtags/${hashtag}/posts`, head(token));
    if(response.data) return response.data;
    else return false
}

function postingLikes (token, id){
    return API.post(`/posts/${id}/like`, {}, head(token))
}

function deletingLikes (token, id){
    return API.post(`/posts/${id}/dislike`, {}, head(token))
}

async function getUserPosts (userId, token){
    const response = await API.get(`/users/${userId}/posts`, head(token))
        .catch(() => false);
    if(response) return response.data
    return false
}

async function editingPost (token, id, value) {
    const response = await API.put(`/posts/${id}`, {"text": value}, head(token))
        .catch(() => false)
    if(response) return response.data
    return false;
}

async function getComments(postId, token) {
    const response = API.post(`/posts/${postId}/comments`, {}, head(token))
        .catch(() => false)

    if(response) return response.data;
    return false;
}

const service =  {
    getHashtags,
    getHashtagsPosts,
    getPosts,
    postingLikes,
    deletingLikes,
    getUserPosts,
    getMyPosts,
    getLikedPosts,
    editingPost,
    getComments
}

export default service;