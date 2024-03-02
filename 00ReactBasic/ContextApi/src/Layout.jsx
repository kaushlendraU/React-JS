import React from 'react';
import CartHeader from './components/Header/CartHeader';
import CartFooter from './components/Footer/CartFooter';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <CartHeader />
            <Outlet />
            <CartFooter />
        </>
    );
}

export default Layout;