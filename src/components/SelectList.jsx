import React from 'react';
import { useState } from 'react';

const SelectList = ({ formats, formatValue }) => {
    const [activeFormat, setActiveFormat] = useState(formatValue[0]);

    const changeActiveFormat = (e, index) => {
        if (!e.target.className.includes("disabled")) {
            setActiveFormat(index);
        }
    }

    const formatList = formats.map((formatName, index) => {
        const isDisabled = formatValue.includes(index) ? "" : "disabled",
            isActive = index === activeFormat ? "active" : "";
        return (<li key={`${formatName}_${index}`}
            onClick={(e) => { changeActiveFormat(e, index) }}
            className={isDisabled + isActive}
        >{formatName}</li>)
    });

    return (
        <ul className="item-format">
            {formatList}
        </ul>
    );
};

export default SelectList;