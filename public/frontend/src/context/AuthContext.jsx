import { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext({
    currentUser: null,
    login: () => {},
    logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const [token, setToken] = useState(
        JSON.parse(localStorage.getItem("ACCESS_TOKEN")) || null
    );

    const login = async (userData, tokenData) => {
        setCurrentUser(userData);
        setToken(tokenData);
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(tokenData));
    };

    const logout = async () => {
        setCurrentUser(null);
        localStorage.setItem("ACCESS_TOKEN", null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
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
