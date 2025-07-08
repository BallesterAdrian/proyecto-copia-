const express = require('express');
const router = express.Router();
const userController = require('../controllers/usercontroller');

// Ruta para registrar usuario (se guarda en waiting_list)
router.post('/register', userController.registerUser);

module.exports = router;
