import React, { createRef } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import axiosClient from "../../util/axios-client";

const Register = () => {
    const [errors, setErrors] = useState({});

    const nameRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const { login } = useAuthContext();

    const navigate = useNavigate();

    const onRegister = (e) => {
        e.preventDefault();

        const payload = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };

        axiosClient
            .post("/registers", payload)
            .then(
                // successful
                ({ data }) => {
                    console.log(data);
                    // login(data.user, data.token);
                    login(
                        {
                            username: "Kidus",
                            email: "kidus@gmail.com",
                        },
                        12345
                    );
                    navigate("/");
                },
                // error
                () => {}
            )
            .catch((err) => {
                const response = err.response;

                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }

                if (response.status === 400) {
                    log({ err });
                }
            });
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onRegister}>
                    <h1 className="title">Signup for Free</h1>
                    {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )}
                    <input ref={nameRef} type="text" placeholder="Full Name" />
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        ref={passwordConfirmationRef}
                        type="password"
                        placeholder="Repeat Password"
                    />
                    <button className="btn btn-block">Signup</button>
                    <p className="message">
                        Already registered? <Link to="/login">Sign In</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
