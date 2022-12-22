import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import AdminLayout from "../components/layout/admin/AdminLayout";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import NotFound from "../views/error/NotFound";
import Home from "../views/public/Home";
import Dashboard from "../views/admin/Dashboard";
import Users from "../views/public/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/users",
                element: <Users />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: <Dashboard />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
