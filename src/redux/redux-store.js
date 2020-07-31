import {combineReducers, createStore} from "redux";
import tableReducer from "./table-reducer";


let reducers = combineReducers({
    usersPage: tableReducer
})

let store = createStore(reducers);

export default store;