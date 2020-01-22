import React from 'react';
import {useLocation} from "react-router";

const NotFoundScreen = () => {
    const {pathname} = useLocation();

    return (
        <div>
            <h1>Not Found!</h1>
            <div>path does not exist: <strong>{pathname}</strong></div>
        </div>
    );
};

export default NotFoundScreen;