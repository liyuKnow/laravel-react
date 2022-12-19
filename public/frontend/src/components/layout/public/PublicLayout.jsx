import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const PublicLayout = () => {
    const { currentUser } = useAuthContext;

    if (!currentUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h1>Protection is coming!</h1>
            <Outlet />
        </div>
    );
};

export default PublicLayout;
