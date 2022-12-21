import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";

const PublicLayout = () => {
    const { currentUser, logout } = useAuthContext();

    const navigate = useNavigate();

    if (!currentUser && currentUser === null) {
        return <Navigate to="/login" />;
    }

    console.log({ currentUser });

    const onLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>

                    <div>
                        Hello {currentUser != undefined && currentUser.name}{" "}
                        &nbsp; &nbsp;
                        <a onClick={onLogout} className="btn-logout" href="#">
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                {/* {notification && (
                    <div className="notification">{notification}</div>
                )} */}
            </div>
        </div>
    );
};

export default PublicLayout;
