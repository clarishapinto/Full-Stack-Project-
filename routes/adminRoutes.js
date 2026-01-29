const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController');

// Middleware to validate login fields
const validateLoginInput = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  next(); // Proceed to loginAdmin if inputs are valid
};

// POST /admin/login
router.post('/login', validateLoginInput, loginAdmin);

module.exports = router;
