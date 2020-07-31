import React from "react";
import {connect} from "react-redux";
import {setUsers, setPreloader,sortTable,viewDetailUser, loadUsersCurrentPage,newFilterText,onFilter,addUser,userAddChange} from '../../redux/table-reducer'
import TableAPI from "./TableAPI";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        preloader: state.usersPage.preloader,
        sortType: state.usersPage.sortType,
        sortColumn: state.usersPage.sortColumn,
        detail:state.usersPage.detail,
        currentPage:state.usersPage.currentPage,
        pagesCount:state.usersPage.pagesCount,
        newTextFilter:state.usersPage.newTextFilter,
        userAdd:state.usersPage.userAdd

    }
}

const TableContainer = connect(mapStateToProps,
    {setUsers, setPreloader, sortTable, viewDetailUser, loadUsersCurrentPage,newFilterText,onFilter,addUser,userAddChange})(TableAPI);

export default TableContainer;