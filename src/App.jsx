import React from 'react';
import { Main, Header, Footer } from './pages';

const App = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Main />
                <Footer />
            </div>
        </div>
    );
};

export default App;