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

    const login = async (userData, tokenData) => {
        setCurrentUser(userData);
        localStorage.setItem("ACCESS_TOKEN", JSON.stringify(tokenData));
    };

    const logout = async () => {
        setCurrentUser(null);
        localStorage.setItem("ACCESS_TOKEN", null);
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
