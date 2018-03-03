const Game = require(`../models/games`);
const Player = require(`../models/games`);

const gamesController = {};

gamesController.create = async (req, res, next) => {
  try {
    const newGame = await Game.create();
    const newPlayer = await Player.join(newGame.id, req.body);
    res.json(await Player.list(newGame.id));
  } catch (err) {
    console.log(err);
  }
};
gamesController.join = async (req, res, next) => {
  try {
    const gameCode = Game.findId(params.game_id);
    const newPlayer = await Player.join(gameCode, req.body);
    res.json(await Player.list(gameCode));
  } catch (err) {
    console.log(err);
  }
};

module.exports = posesController;
