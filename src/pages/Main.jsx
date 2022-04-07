import React from 'react';
import { useState, useEffect } from 'react';

import { MusicItem } from '../components';

const Main = () => {
    const [musicItemsArr, setMusicItemsArr] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3001/musicItems")
            .then(response => response.json())
            .then(jsonArr => setMusicItemsArr(jsonArr));
    }, []);

    const musicItemsToRender = musicItemsArr.map(({ id, img, title, artist, format, price }) => (
        <MusicItem
            key={id}
            img={img}
            title={title}
            artist={artist}
            format={format}
            price={price}
        />
    ));
    return (
        <main>
            {musicItemsToRender}
        </main>
    );
};

export default Main;