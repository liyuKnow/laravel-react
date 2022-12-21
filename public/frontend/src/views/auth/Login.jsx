import { useState } from "react";
import { createRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const emailRef = createRef();
    const passwordRef = createRef();
    const [message, setmessage] = useState("hello I am a message");
    const { login, currentUser } = useAuthContext();
    const navigate = useNavigate();
    const onLogin = () => {
        login(
            {
                username: "Kidus",
                email: "kidus@gmail.com",
            },
            12345
        );
        navigate("/");
    };
    if (currentUser && currentUser != null) {
        return <Navigate to="/" />;
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onLogin}>
                    <h1 className="title">Login into your account</h1>

                    {message && (
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    )}

                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/register">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
