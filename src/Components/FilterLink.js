import React from 'react';

const Link = ({text, filter, active, setFilter}) => {
    return (
        active ? <span> {text} </span> : <span><a href='#' onClick={(e) => 
                    {
                        e.preventDefault();
                        setFilter(filter);
                    }
            }>
            {text}
            </a></span>
    )
}

export default Link;