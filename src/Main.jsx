import React from 'react';

import MusicItem from './components/MusicItem';

const Main = () => {
    fetch("http://localhost:3001/musicItems")
        .then(data => data.json())
        .then(json => console.log(json));
    return (
        <main>
            <MusicItem />
        </main>
    );
};

export default Main;