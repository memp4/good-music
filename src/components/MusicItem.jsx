import React from 'react';
import { useState } from 'react';

import SelectList from './SelectList';
import Button from './Button';

const MusicItem = ({ img, title, artist, format, price }) => {
    const formats = ["Vinyl", "CD Drive"];
    const [addCount, setAddCount] = useState(0);

    const display = addCount > 0 ? "display" : "";

    const increaseCountOne = () => {
        setAddCount(addCount + 1);
    }

    return (
        <div className="item">
            <a href="/">
                <img src={process.env.PUBLIC_URL + "/img/" + img} alt="Yeezus" className="item-cover" width="180px"></img>
            </a>
            <p className="item-title">{title}</p>
            <p className="item-artist">{artist}</p>
            <SelectList formats={formats} formatValue={format} />
            <div className="item-buy">
                <Button onClickIncrease={increaseCountOne}/>
                <span className={`count ${display}`}>{addCount}</span>
                <span className="price">{price}$</span>
            </div>
        </div>
    );
};

export default MusicItem;