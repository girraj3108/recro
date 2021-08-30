import{GET_POSTS_SUCCESS} from "./action-type";

const initialState = {
    postsList: [],
}

const postListReducer = (state = initialState, action) => {
    if(action.type === GET_POSTS_SUCCESS){
        return {
            ...state,
            postsList: [...state.postsList,...action.payload]
            
        }
    }
    return state;
}

export default postListReducer;