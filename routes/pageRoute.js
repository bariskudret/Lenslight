const express = require('express');

const router = express.Router();

const pageController = require('../controllers/pageController.js');
const userMiddleware = require('../middleware/autMiddleware.js');

router.route('/').get( userMiddleware.authenticateToken, pageController.getPageIndex);
router.route('/about').get(pageController.getPageAbout);
router.route('/register').get(pageController.getPageRegister); // route ettiğin /register siimli yer menu.ejs deki hrefle aynı olamlı yoksa yanlış yönlenidrme olur.
router.route('/login').get(pageController.getPageLogin);

module.exports = router;