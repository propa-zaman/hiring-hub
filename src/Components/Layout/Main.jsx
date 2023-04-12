import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

export const JobDataContext = createContext([]);

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;