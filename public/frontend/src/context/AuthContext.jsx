import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (userData) => {
        const res = await axios.post(
            "http://localhost:8888/api/auth/login",
            userData
        );
        setCurrentUser(res.data);
    };

    const logout = async () => {
        // const res = await axios.post("http://localhost:8888/api/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    const values = {
        currentUser,
        login,
        logout,
    };
    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);
