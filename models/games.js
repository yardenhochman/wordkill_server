const db = require('../db/config');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

const Game = {
  create: () => {
    const newGame = Object.assign(
      {
      code: generateRandomCode(), //TBH
      },
      game,
    );
    return await db.one(
      `
      INSERT INTO games (public_code) 
      VALUES ($/code/)
      RETURNING *
      `, newGame,
    );
  },
  findId: code =>  await db.one(
    `
    SELECT (game_id) 
    from games
    WHERE (game_code=$1)`, code,
  )
}

const Player = {
  join: (gameId, {player}) => {
    const newPlayer = Object.assign(
      {gameId}, player
    );
    return await db.one(
      `
      INSER INTO players
      (name,game_id, score)
      VALUES ($/name/, $/gameId/,0)
      RETURNING *
      `, newPlayer,
    )
  },
  list: id => await db.query(
    `
    SELECT * from players
    WHERE game_id=$1
    `, id,
  )
}
module.exports = Game,Player;
