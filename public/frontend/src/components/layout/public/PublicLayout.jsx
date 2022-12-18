import React from "react";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
    return (
        <div>
            <h1>Navbar from layout</h1>
            <Outlet />
        </div>
    );
};

export default PublicLayout;
