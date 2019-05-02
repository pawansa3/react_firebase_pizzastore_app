import React from 'react';

const Login = (props) => {
    return (
        <div className="login">
            <p className="textColor">Sign in to place order.</p>
            <button className="gmail" onClick={()=>props.authenticate("Google")}>Log In With Gmail</button>
        </div>
    );
}


export default Login;