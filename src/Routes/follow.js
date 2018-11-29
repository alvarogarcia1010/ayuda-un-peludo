'use strict'
const express = require('express');
const router = express.Router();
const FollowManager = require("../Controllers/FollowManager");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");

//Middleware que verifica que solo los usuarios registrados podran ingresar a esta seccion
router.use(AuthMiddleware.isAuthentication);

router.post('/follow/:id', FollowManager.followUser);

router.delete('/unfollow/:id', FollowManager.followUser);

module.exports = router;
