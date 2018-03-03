const express = require('express');
const gameRouter = express.Router();
const gameController = require('../controllers/game-controller');

gameRouter.route('/').post(gameController.create);
gameRouter.route('/join/:game_id').post(gameController.join);

module.exports = gameRouter;
