import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import './Friend.css'

const Friend = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/detail/${id}`)
    }
    return (
        <div className="container">
            <div className="friend-cart">
                <h3>Name: {name}</h3>
                <p>E-mail: {email}</p>
                {/* <Link to={`/detail/${id}`}><button >Detail</button></Link> */}
                <Button variant="contained" size="small" color="primary" onClick={() => handleClick(id)}>Detail</Button>

            </div>
        </div>
    );
};

export default Friend;