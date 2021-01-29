import { FETCH_ALL, CREATE } from "../constants/postsConstants";

const postsReducer = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return posts;
        default:
            return posts;
    }
}

export default postsReducer