import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

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