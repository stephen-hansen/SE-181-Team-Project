class User {
  constructor(socketId, username, gameId) {
    this.username = username;
    this.gameId = gameId;
    this.color = null;
    this.socketId = socketId;
    this.connected = true;
  }
}

const users = {};

function userJoin(id, username, gameId) {
  users[id] = new User(id, username, gameId);
  return users[id];
}

// remove user from memory
// return the game that they were in so we can remove them from the game as well
function userLeave(id) {
  const game = users[id].gameId;
  delete users[id];
  return game;
}

function getUser(id) {
  return users[id];
}

function getUsers() {
  return users;
}

module.exports = {
  userJoin,
  userLeave,
  getUser,
  getUsers,
  User,
};
