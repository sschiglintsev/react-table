import React from "react";
import DetailUser from "./DetailUser/DetailUser";
import style from './Table.module.css'
import Add from "./Add/Add";

let Table = (props) => {
    let pages = [];
    for (let i = 1; i <= props.pagesCount; i++) {
        pages.push(i);
    }
    let newFilter = React.createRef();
    let onNewFilterText = () => {
        let text = newFilter.current.value;
        props.newFilterText(text);
    }
    return (
        <div>

            <div> Страницы
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p && style.selectedPage}
                              onClick={() => props.loadUsersCurrentPage(p)}>{p} </span>
                    )
                })}
            </div>
            <div>
                <textarea onChange={onNewFilterText} ref={newFilter} value={props.newTextFilter}></textarea>
                <button onClick={props.onFilter}>Найти</button>
            </div>
            <button onClick={props.userAddChange}>Добавить</button>
            {props.userAdd ? <Add addUser={props.addUser}/> : null}
            <table>
                <thead>
                <tr>
                    <th onClick={() => props.sortTable('id')}>ID {props.sortColumn === 'id' ? props.sortType === 'asc' ?
                        <span>▲</span> : <span>▼</span> : null}</th>
                    <th onClick={() => props.sortTable('firstName')}>First
                        Name {props.sortColumn === 'firstName' ? props.sortType === 'asc' ? <span>▲</span> :
                            <span>▼</span> : null}</th>
                    <th onClick={() => props.sortTable('lastName')}>Last
                        Name {props.sortColumn === 'lastName' ? props.sortType === 'asc' ? <span>▲</span> :
                            <span>▼</span> : null}</th>
                    <th onClick={() => props.sortTable('email')}>E-mail {props.sortColumn === 'email' ? props.sortType === 'asc' ?
                        <span>▲</span> : <span>▼</span> : null}</th>
                    <th onClick={() => props.sortTable('phone')}>Phone {props.sortColumn === 'phone' ? props.sortType === 'asc' ?
                        <span>▲</span> : <span>▼</span> : null}</th>
                </tr>
                </thead>
                <tbody>
                {props.users.map(u => (
                    <tr key={u.id + u.phone} onClick={() => props.viewDetailUser(u)}>
                        <td>{u.id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.lastName}</td>
                        <td>{u.email}</td>
                        <td>{u.phone}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                {props.detail ? <DetailUser user={props.detail}/> : null}
            </div>
        </div>
    )
}
export default Table;