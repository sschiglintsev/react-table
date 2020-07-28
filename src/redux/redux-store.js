import {combineReducers, createStore} from "redux";
import usersReduscer from "./users-reducer";


let reducers = combineReducers({
    usersPage: usersReduscer
})

let store = createStore(reducers);

export default store;