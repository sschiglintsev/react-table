import React from 'react';
import Table from './Table';
import axios from 'axios'
import Preloader from "../Common/Preloader/Preloader";

class TableAPI extends React.Component {
    componentDidMount(pr,link) {
        this.props.setPreloader(pr);
        axios
            .get(link)
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data);
            })
    }

    render() {
        return <>
            {this.props.preloader ? <Preloader/> : null}
            <div>
                <button onClick={() => this.componentDidMount(true,'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')}>32 пользователя</button>
                <button onClick={() => this.componentDidMount(true,'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')}>1000 пользователей</button>
            </div>
        <Table
            users={this.props.users}
            preloader={this.props.preloader}
            sortTable={this.props.sortTable}
            detail={this.props.detail}
            viewDetailUser={this.props.viewDetailUser}
            sortColumn={this.props.sortColumn}
            sortType={this.props.sortType}
            pagesCount={this.props.pagesCount}
            currentPage={this.props.currentPage}
            loadUsersCurrentPage={this.props.loadUsersCurrentPage}
            newFilterText={this.props.newFilterText}
            onFilter={this.props.onFilter}
            addUser={this.props.addUser}
            userAdd={this.props.userAdd}
            userAddChange={this.props.userAddChange}
        />
        </>

    }
}

export default TableAPI;