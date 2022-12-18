import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../components/layout/public/PublicLayout";
import AdminLayout from "../components/layout/admin/AdminLayout";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Users from "../views/auth/Users";
import NotFound from "../views/error/NotFound";
import Home from "../views/public/Home";
import Dashboard from "../views/admin/Dashboard";
import AboutUs from "../views/public/AboutUs";

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
                path: "/about",
                element: <AboutUs />,
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
        path: "/users",
        element: <Users />,
    },
    {
        path: "/users",
        element: <Users />,
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);

export default router;
