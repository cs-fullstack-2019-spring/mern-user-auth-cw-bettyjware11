import React, { Component } from 'react';

class UserList extends Component{
    constructor(props) {
        super(props);
        this.state= {
            data: [],
            userMap:[]
        }

        ;
    }

    componentDidMount() {
        this.loadData();
    }

    loadData=(e)=>{
        fetch('/users/')
            .then(data=>data.json());
            .then(jsonedData => this.setState({data: jsonedData.results}))
    };

    render(){
        let userMap = this.state.data.map(
            (eachElement)=>{
                return(<h4 key={eachElement.username}>{eachElement.password}@{eachElement.email}</h4>)
            }
        );

        return(
            <div>
                <p>Users</p>
                {userMap}
            </div>
        );
    }
}
export default UserList;