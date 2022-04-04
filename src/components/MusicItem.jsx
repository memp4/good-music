import React from 'react';

const MusicItem = ({ img, title, artist, format, price }) => {
    return (
        <div className="item">
            <a href="/">
                <img src={process.env.PUBLIC_URL + "/img/" + img} alt="Yeezus" className="item-cover" width="180px"></img>
            </a>
            <p className="item-title">{title}</p>
            <p className="item-artist">{artist}</p>
            <ul className="item-format">
                <li className="active">Vynil</li>
                <li className="disabled">CD Drive</li>
            </ul>
            <div className="item-buy">
                <span className="button">Add</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    );
};

export default MusicItem;