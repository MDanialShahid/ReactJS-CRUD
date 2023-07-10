import React, { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import validator from 'validator';
import './style.css'

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const history = useNavigate();
    const database = [
        {
            username: "M Danial Shahid",
            password: "Danial143"
        },
        {
            username: "Dj Daniell",
            password: "daniell22"
        }
    ];

    const errors = {
        uname: "invalid username",
        eemail: "invalid email",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass} = document.forms[0]; 

        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
                history('/home');
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    const [emailError, setEmailError] = useState('')
    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('invalid email')
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" id="userEmail" onChange={(e) => validateEmail(e)} require></input>
                    <span style={{
                        color: 'red',
                    }}>{emailError}</span>
                </div>
                <div className="input-container">
                    <label>Username</label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password</label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <Link to='/home' className='btn btn-danger ms-2'>Home</Link> : renderForm}
            </div>
        </div>
    );
}

export default Login;
