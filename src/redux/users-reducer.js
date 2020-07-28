import React from 'react';
const SET_USERS = 'SET_USERS';
const SET_PRELOADER = 'SET_PRELOADER';

let initialState = {
    users: [],
    preloader:true
}

const usersReduscer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                    ...state, users: action.users
            }
        }
        case SET_PRELOADER: {
            return {
                ...state, preloader: action.preloader
            }
        }
        default:
            return state;
    }
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setPreloader = (preloader) => {
    return {type:SET_PRELOADER,preloader}
}

export default usersReduscer;

