import React, { Component } from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        const { name, value } = e.target;
        this.props.handleChangeEmail
    }
    handleChangePassword(e) {
        const { name, value } = e.target;
        this.props.handleChangePassword
    }
    handleSubmit(e) {
        this.props.handleSubmit
    }

    render() {

        return (
            <form name="form" onSubmit={this.handleSubmit}>
                <p>E-mail address</p>
                <input type="text" id="email" name="email" placeholder="example@exampl.com" onChange={this.handleChangeEmail} />

                <p>Password</p>
                <input type="password" id="password" name="password" placeholder="your password..." onChange={this.handleChangePassword} />
                <br /><br />
                <button className="btn">SIGN IN</button>
                
            </form>
        )
    }
}

export default Form;