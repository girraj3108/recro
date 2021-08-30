import { call, fork, put, takeLatest } from "redux-saga/effects";

import axios from 'axios';
import { GET_POSTS } from "./action-type";
import { getPostsListSuccess } from "./action";

function* watchGetPostsSaga(){
    yield takeLatest(GET_POSTS, getPostsList)
}

function* getPostsList(action) {
    try {
      const posts = yield call(
        axios.get,
        `https://jsonplaceholder.typicode.com/posts?_start=${action.payload}&_limit=10`,
      );
      console.log("posts",posts.data);
      yield put(getPostsListSuccess(posts.data));
    } catch (e) { } 
}

  const postListSaga = [
      fork(watchGetPostsSaga),
  ]

  export default postListSaga;