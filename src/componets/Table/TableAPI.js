import React from 'react';
import Table from './Table';
import axios from 'axios'

class ReactAPI extends React.Component {
    componentDidMount() {
        this.props.setPreloader(true);
        axios
            .ge('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(response => {
                this.props.setPreloader(false);
                this.props.setUsers(response.data);
            })
    }
    render() {
        return (
            <Table
                users={this.props.users}
            />
        )
    }
}