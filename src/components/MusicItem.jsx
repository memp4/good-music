import React from 'react';

import logo from '../assets/img/Dr-Dre-The-Chronic-album-cover.webp';

const MusicItem = () => {
    return (
        <div className="item">
            <a href="/">
                <img src={logo} alt="Yeezus" className="item-cover" width="180px"></img>
            </a>
            <p className="item-title">Yeezus</p>
            <p className="item-artist">Kanye West</p>
            <ul className="item-format">
                <li className="active">Vynil</li>
                <li className="disabled">CD Drive</li>
            </ul>
            <div className="item-buy">
                <span className="button">Add</span>
                <span className="price">50$</span>
            </div>
        </div>
    );
};

export default MusicItem;