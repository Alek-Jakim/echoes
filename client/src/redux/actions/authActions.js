import * as api from '../../utils/fetchPosts';
import { AUTH } from '../constants/postsConstants';

export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign up as user
        history.push('/')
    }
    catch (error) {
        console.log(error);
    }
}

export const signin = (formData, history) => async (dispatch) => {
    try {
        //log in as user

        history.push('/')
    }
    catch (error) {
        console.log(error);
    }
}