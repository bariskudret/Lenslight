const express = require('express');

const router = express.Router();

const photoController = require('../controllers/photoController.js');

router.route('/').post(photoController.createPhoto);
router.route('/').get(photoController.getAllPhotos);

router.route('/:id').get(photoController.getApPhotos);

module.exports = router;