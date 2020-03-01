//using this file to manage users

const users = [];

//user helper functions

const addUser = ({ id, name, room }) => {
//Clef Music Network = clefmusicnetwork


name = name.trim().toLowerCase();
room = room.trim().toLowerCase();

//looks to see if there is a user in a same room with the same username then forbidden
const existingUser = users.find((user) => user.room === room && user.name === name);

if (existingUser) {
    return { error: 'Username is taken'}
}

const user = { id, name, room };

users.push(user);

return { user }

}


//removes a user with a specific ID
const removeUser = (id) => {
    const index = users.findIndex((user) => user,id === id);

    if(index !== -1) {
        return users.splice(index, 1)[0];
    }
}

//see if there is a user
const getUser = (id) => users.find((user) => user.id === id)
;   

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };