import React from 'react';
import logo from './logo.svg'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false,
            isLoggedIn : false,
            loginFail : false
        };

        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {


    }

    handleChangeEmail(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleChangePassword(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({submitted: true})
        fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({email:this.state.email, password:this.state.password}),
               
            }).then((res) =>  {
                console.log('res : ', res);
                if (res.status === 401) {
                    this.setState({loginFail: true, submitted: false})
                }else if (res.status === 200) {
                    this.setState({isLoggedIn: true, loginFail: false, submitted: false})
                    alert('Login Successed');
                }
            })
            .then((data) =>  console.log(data))
            .catch((err)=> this.setState({loginFail: true}))
    }
    
    render() {
        // start your code here
        var invalid = "E-mail or password is incorrect";
        return (
            <div>

                <div className="Login">
                    <div className="container">
                        
                        { this.state.submitted ? <img src={logo} className="logo-spin" /> : <img src={logo} />}
                        <form name="form" onSubmit={this.handleSubmit}>


                            <p>E-mail address</p>
                            <input type="text" id="email" name="email" placeholder="example@exampl.com" onChange={this.handleChangeEmail} />

                            <p>Password</p>
                            <input type="password" id="password" name="password" placeholder="your password..." onChange={this.handleChangePassword} />
                            <br /><br />
                            <button className="btn">SIGN IN</button>
                        </form>
                        
                        
                        { this.state.loginFail ? <p className="error" dangerouslySetInnerHTML={{ __html: invalid }}></p> : "" }
                        

                        <a href="#">Forget Password</a>
                        <a href="#">Create a new account</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
