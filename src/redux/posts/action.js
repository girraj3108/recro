import { GET_POSTS, GET_POSTS_SUCCESS } from "./action-type";

export const getPostsList = (start) => ({
    type: GET_POSTS,
    payload:start
})

export const getPostsListSuccess =  data => ({
    type: GET_POSTS_SUCCESS,
    payload: data
})