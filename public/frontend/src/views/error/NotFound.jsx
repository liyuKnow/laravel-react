import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h1>The Page you are looking for is not found!</h1>
            <Link to="/">Return Back Home</Link>
        </div>
    );
};

export default NotFound;
