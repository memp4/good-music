import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main, Header, Footer, Cart } from './pages';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/cart" element={<Cart />}/>
                </Routes>
                <Footer />
            </div>
        </div>
    );
};

export default App;