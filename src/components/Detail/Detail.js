import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Detail = () => {
    const [friend, setFriend] = useState({});
    const {name, email, phone, website} = friend;
    
    const {friendId} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(response => response.json())
        .then(data=> setFriend(data))
    }, [])
    
    return (
        <div className="friend-cart">
            <h3>Name: {name}</h3>
            <p>E-mail: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
        </div>
    );
};

export default Detail;