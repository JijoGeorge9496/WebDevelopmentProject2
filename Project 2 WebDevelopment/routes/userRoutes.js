const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/', protect, getUsers);

module.exports = router;
