const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { addUser, removeUser, getUser, getUserInRoom } = require('./users.js');

//for dev purposes we are grabbing port 5k
const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
    
// console.log('We have a new connection!!!')
socket.on('join', ({ name, room }, callback) => {
const { error, user } = addUser({ id: socket.id, name, room });

if(error) return callback(error);

socket.emit('message', { user: 'admin', text:`${user.name}, Welcome to the room ${ user.name }` })

socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined the chat!`});

socket.join(user.room);

callback();
});

socket.on('sendMessage', (message, callback) => {
const user = getUser(socket.id);

io.to(user.room).emit('message', { user: user.name, text: message});

callback();

});

    socket.on('disconnect', () => 
    {
    console.log('User had left!!!')  
    })
});




//calling router as middleware
app.use(router);


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));