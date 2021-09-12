import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    };
    return (
        <div className="login">
            <Link to="/">
                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="" />
            </Link>
            <div class="login_container">
                <h1> Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email">
                    </input>
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign in </button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login_registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login;
