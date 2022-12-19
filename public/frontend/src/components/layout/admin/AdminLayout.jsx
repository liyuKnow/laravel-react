import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const AdminLayout = () => {
    const { currentUser } = useAuthContext;

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Navbar from admin layout</h1>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
