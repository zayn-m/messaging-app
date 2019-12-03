const users = [];

const User = require('../models/User');

const addUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase();
	room = room.trim().toLowerCase();

	const existingUser = users.find((user) => user.room === room && user.name === name);

	if (existingUser) {
		return { error: 'User name is taken' };
	}

	const user = { id, name, room };

	users.push(user);

	return { user: user };
};

const removeUser = (id) => {
	const index = users.findIndex((user) => user.id === id);

	if (index !== -1) {
		return users.splice(index, 1)[0];
	}
};

const getUser = (id) => {
	return users.find((user) => user.id === id);
};

const getUsersInRoom = async (room) => {
	return await User.find({ room: room });
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
