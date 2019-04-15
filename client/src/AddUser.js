import React, { Component } from 'react';

class AddUser extends Component{
    constructor(props) {
        super(props);
        this.state={
            // This state will hold data array from the server
            data:[],
        };
    }

// This function is run when you submit the form and add a new user
    submitAddUserForm=(e)=>{
        //preventDefault to stop the page from reloading...if reloaded the rest of the function won't run
        e.preventDefault();
        console.log("Submitting Add User");
        //Call localhost[PORT]/user
        fetch('/users/newuser',
            {
                method: 'POST',
                // You need HTML headers so the server knows the data in the HTML body is json.
                headers:{
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                //turn JSON data into a stringJSON data when we send it to the server
                body: JSON.stringify({
                    username: e.target.username.value,
                    password: e.target.password.value,
                    email: e.target.password.value
                }),
            })
        // response from server is pushed into the variable
        .then(data=>data.json())
        .then(message=>this.setState({data:message}));
    };

    render(){
        return(
            <div>
                <h1>Register New User</h1>
                {/*This form will run the submitAddUser function when you hit a button in the form*/}
                <form onSubmit={this.submitAddUserForm}>
                    <p>
                        <label htmlFor="username">Enter your user name:</label>
                    <input type="text" name='username' placeholder="" autoFocus/>
                    </p>
                    <p>
                        <label htmlFor="password">Enter your password:</label>
                    <input type="password" name='password' placeholder="" />
                    </p>
                    <p>
                        <label htmlFor="email">Enter your email address:</label>
                    <input type="email" name='email' placeholder="" />
                    </p>
                    {/*When you click this button it will send all the form's data to the submitAddUser form via the onSubmit call*/}
                    <button>Sign In</button>
                </form>
                {this.state.data}
                {/*{userMap}*/}
            </div>
        );
    }
}

export default AddUser;