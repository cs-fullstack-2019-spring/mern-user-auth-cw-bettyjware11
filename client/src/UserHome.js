import React, { Component } from 'react';
import UserList from "./UserList";
import AddUser from "./AddUser";
import Login from "./Login";
import Loggedout from "./Loggedout";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class UserHome extends Component{
    render(){
        return(
            <div>
                {/*Allows you to use Link and Router*/}
                <Router>
                    <h1>Welcome to the User Database</h1>
                    {/*A link back home to the main '/' root page*/}
                    <Link className={'linkSpacing'} to='/'>Home</Link>
                    {/*A link to the '/listing' route path*/}
                    <Link className={'linkSpacing'} to='/list'>UserList</Link>
                    {/*A link to the '/addUser' route path*/}
                    <Link className={'linkSpacing'} to='/addMovie'>Add User</Link>
                    {/*A link to the '/SignIn' route path*/}
                    <Link className={'linkSpacing'} to='/signIn'>Sign In</Link>
                    {/*A link to the '/logOut' route path*/}
                    <Link className={'linkSpacing'} to='/logOut'>Log Out</Link>

                    {/*Calls user list component*/}
                    <Route path={'/'} component={UserList}/>

                    {/*will call the component Add User*/}
                    <Route path={'/addUser'} component={AddUser}/>
                    {/*will call the component Sign In*/}
                    <Route path={'/signin'} component={Login}/>
                    {/*will call the component Logout*/}
                    <Route path={'/logout'} component={Loggedout}/>
                </Router>
            </div>
        );
    }
}

export default UserHome;