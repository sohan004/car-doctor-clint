import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({ children }) => {
    const loc = useLocation().pathname
    const { user, load } = useContext(AuthContex)
    if (load) {
        return
    }
    if (user) {
        return children

    } else {
        return <Navigate to="/log" state={loc}></Navigate>

    }
};

export default Private;