import {combineReducers} from "redux";
import postListReducer from "../redux/posts/reducer";

const rootReducer = combineReducers({
    postList : postListReducer
})

export default rootReducer;