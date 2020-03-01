import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Join.css';



const Join = () => {
    const [name, setName] = useState ('');
    const [room, setRoom] = useState ('');


return (
    <div className="joinOuterContainer">
    <div className="joinInnerContainer">
        <h1 className="heading">Demon Chat</h1>
        <div><input placeholder="DemonBaby Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
        
        <div><input placeholder="DemonBaby Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
    {/* passing data through query stings instead of props */}
    {/* reads the name and room from the data , also adding option to prevent user from logging in with a name or a room*/}
        <Link onClick={event => (!name || !room ) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
        <button className="button mt-20" type="submit">Sign In</button>
        </Link>
</div>
    </div>
)
}

export default Join;