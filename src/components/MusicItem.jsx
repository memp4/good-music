import React from 'react';
import {useState} from 'react';

const MusicItem = ({ img, title, artist, format, price }) => {
    const [activeFormat, setActiveFormat] = useState(format[0]);

    const changeActiveFormat = (e, index) => {
        if (!e.target.className.includes("disabled")) {
            setActiveFormat(index);
        }
    }

    const formats = ["Vynil", "CD Drive"];
    const formatList = formats.map((formatName, index) => {
            const isDisabled = format.includes(index) ? "" : "disabled",
                isActive = index === activeFormat ? "active" : "";
            return (<li key={`${formatName}_${index}`}
                onClick={(e) => {changeActiveFormat(e, index)}}
                className={isDisabled + isActive}
                >{formatName}</li>)
        });

    return (
        <div className="item">
            <a href="/">
                <img src={process.env.PUBLIC_URL + "/img/" + img} alt="Yeezus" className="item-cover" width="180px"></img>
            </a>
            <p className="item-title">{title}</p>
            <p className="item-artist">{artist}</p>
            <ul className="item-format">
                {formatList}
            </ul>
            <div className="item-buy">
                <span className="button">Add</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    );
};

export default MusicItem;