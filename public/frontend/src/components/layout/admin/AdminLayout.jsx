import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
    const { currentUser } = useAuthContext();

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <Sidebar />
            <Navbar />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
