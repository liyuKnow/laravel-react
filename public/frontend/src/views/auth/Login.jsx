import { useState } from "react";
import { createRef } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../../util/axios-client";

const Login = () => {
    const emailRef = createRef();
    const passwordRef = createRef();

    const [errors, setErrors] = useState("");

    const { login, currentUser } = useAuthContext();

    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        setErrors(null);

        axiosClient
            .post("/login", payload)
            .then(
                // successful
                ({ data }) => {
                    login(data.user, data.token);
                    navigate("/");
                }
            )
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            password: [response.data.message],
                        });
                    }
                }
            });
    };
    if (currentUser && currentUser != null) {
        return <Navigate to="/" />;
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onLogin}>
                    <h1 className="title">Login into your account</h1>

                    {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
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
