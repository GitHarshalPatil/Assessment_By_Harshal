const express = require('express');
const router = express.Router();
const { getUsers, createUser, getUserByEmail } = require('../controllers/userController');

// Get all users
router.get('/', getUsers);

// Create new user
router.post('/', createUser);

// Get user by email
router.get('/:email', getUserByEmail);

module.exports = router;
