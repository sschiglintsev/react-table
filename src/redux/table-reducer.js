import React from 'react';
import lodash from 'lodash'

const SET_USERS = 'SET_USERS';
const SET_PRELOADER = 'SET_PRELOADER';
const SORT_TABLE = 'SORT_TABLE';
const VIEW_DETAIL_USER = 'VIEW_DETAIL_USER';
const LOAD_USERS_CURRENT_PAGE = 'LOAD_USERS_CURRENT_PAGE';
const NEW_FILTER_TEXT = 'NEW_FILTER_TEXT';
const ON_FILTER = 'ON_FILTER';
const ADD_USER = 'ADD_USER';
const USER_ADD_CHANGE = 'USER_ADD_CHANGE';

let initialState = {
    users: [],
    usersTotal: [],
    usersFilter: [],
    usersCopy: [],
    preloader: true,
    sortType: 'asc',
    sortColumn: '',
    detail: null,
    pagesCount: '',
    currentPage: 1,
    usersCountView: 50,
    newTextFilter: '',
    userAdd: false
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            let count = Math.ceil(action.users.length / state.usersCountView);
            return {
                ...state,
                usersTotal: action.users,
                users: action.users.slice(0, state.usersCountView),
                usersCopy: action.users.slice(0, state.usersCountView),
                pagesCount: count
            }
        }
        case SET_PRELOADER: {
            return {
                ...state, preloader: action.preloader
            }
        }
        case SORT_TABLE: {
            let copyUsers = state.users.concat();
            if (state.sortColumn != action.column) {
                state.sortType = 'asc'
            }
            let sortUsers = lodash.orderBy(copyUsers, action.column, state.sortType);
            let sortType = state.sortType === 'asc' ? 'desc' : 'asc';
            return {
                ...state, users: sortUsers, sortType: sortType, sortColumn: action.column
            }
        }
        case VIEW_DETAIL_USER: {
            return {
                ...state, detail: action.user
            }
        }
        case LOAD_USERS_CURRENT_PAGE: {
            let x = (action.page - 1) * state.usersCountView;
            let y = action.page * state.usersCountView;
            return {
                ...state, currentPage: action.page, users: state.usersTotal.slice(x, y)
            }
        }
        case NEW_FILTER_TEXT: {
            return {
                ...state, newTextFilter: action.text
            }
        }
        case ON_FILTER: {
            if (state.newTextFilter==='') {
                state.usersCopy.map(u => {state.usersFilter.push(u);})
            } else {
                state.usersCopy.map(u => {
                    if (lodash.includes(String(u.id).toLowerCase(), state.newTextFilter.toLowerCase())) {
                        state.usersFilter.push(u);
                    } else {
                        if (lodash.includes(String(u.firstName).toLowerCase(), state.newTextFilter.toLowerCase())) {
                            state.usersFilter.push(u);
                        } else {
                            if (lodash.includes(String(u.lastName).toLowerCase(), state.newTextFilter.toLowerCase())) {
                                state.usersFilter.push(u);
                            } else {
                                if (lodash.includes(String(u.email).toLowerCase(), state.newTextFilter.toLowerCase())) {
                                    state.usersFilter.push(u);
                                } else {
                                    if (lodash.includes(String(u.phone).toLowerCase(), state.newTextFilter.toLowerCase())) {
                                        state.usersFilter.push(u);
                                    }
                                }
                            }
                        }
                    }
                })
            }

            return {
                ...state, users: state.usersFilter, usersFilter: []
            }
        }
        case ADD_USER: {
            return {
                ...state,
                users: [{
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    phone: action.phone
                }, ...state.users],
                usersCopy: [{
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    phone: action.phone
                }, ...state.usersCopy],
                usersTotal: [{
                    id: action.id,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                    phone: action.phone
                }, ...state.usersTotal],
                userAdd: false
            }
        }
        case USER_ADD_CHANGE: {
            state.userAdd ? state.userAdd = false : state.userAdd = true
            return {
                ...state, userAdd: state.userAdd
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
    return {type: SET_PRELOADER, preloader}
}
export const sortTable = (column) => {
    return {type: SORT_TABLE, column}
}
export const viewDetailUser = (user) => {
    return {type: VIEW_DETAIL_USER, user}
}
export const loadUsersCurrentPage = (page) => {
    return {type: LOAD_USERS_CURRENT_PAGE, page}
}
export const newFilterText = (text) => {
    return {type: NEW_FILTER_TEXT, text}
}
export const onFilter = () => {
    return {type: ON_FILTER}
}
export const addUser = (id, firstName, lastName, email, phone) => {
    return {type: ADD_USER, id, firstName, lastName, email, phone}
}
export const userAddChange = () => {
    return {type: USER_ADD_CHANGE}
}
export default tableReducer;

