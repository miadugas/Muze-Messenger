import React, { useState } from 'react';
import { Link } from "react-router-dom";



import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Muze Messenger</h1>
        <h1 className="heading2">Realtime Chat <span role="img" aria-label="emoji">💬</span></h1>
        <h2 className="heading3">Created with React.js, Node.js, <br/>Express.js and Socket.IO</h2>
        <div>
          <input placeholder="Your User Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Your Room ID" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>

        {/* passing data through query stings instead of props 
    reads the name and room from the data , also adding option to prevent user from logging in with a name or a room*/}

        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  );
}


// export default Join;








