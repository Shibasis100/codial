const express = require('express');
const router = express.Router();

const usersConrtoller = require('../controllers/users_controllers');

router.get('/profile', usersConrtoller.profile);


module.exports = router;