const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController.js');

router.route('/register').post(userController.createUser);
router.route('/login').post(userController.userLogin);
module.exports = router;