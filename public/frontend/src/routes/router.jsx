import { createBrowserRouter } from "react-router-dom";
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import Users from "../views/auth/Users";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    ,
    {
        path: "/users",
        element: <Users />,
    },
]);

export default router;
