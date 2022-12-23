import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import AdminLayout from "../components/layout/admin/AdminLayout";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import NotFound from "../views/error/NotFound";
import Home from "../views/public/Home";
import Dashboard from "../views/admin/Dashboard";
import Users from "../views/public/Users";
import AddUser from "../views/public/UserForm";
import UserForm from "../views/public/UserForm";

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
            {
                path: "/users/new",
                element: <UserForm key="userCreate" />,
            },
            {
                path: "/users/:id",
                element: <UserForm key="userUpdate" />,
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
