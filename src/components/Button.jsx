import React from 'react';

const Button = ({ onClickIncrease }) => {
    return (
        <span className="button"
            onClick={onClickIncrease}>Add</span>
    );
};

export default Button;