import React from 'react';

const Card = ( {title} ) => {

    return (
        <div className="m-auto" >
            <h6 className="center white-text text-darken-1" style={ {textTransform:'uppercase'} }>{ title }</h6>
        </div>
    )
}

export default Card;