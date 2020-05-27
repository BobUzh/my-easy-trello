import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(

        <div className="container valign-wrapper" style={{height: '20vh'}}>
            <div className="m-auto">
                <Link to="/my-easy-trello/"><h1 style={{fontFamily: 'Modak'}}>"trello"</h1></Link>
            </div>
        </div>

    )
}

export default Header;