import * as db from '../db/gamesDb.js'

export const getAllGames = async (req, res) => {
  res.status(200);

  const dataResults = await db.getAllGames();
  res.json({
    message: "success",
    data: dataResults
  })
}

export const getGameByTitle = async (req, res) => {
  const game = await db.getGameByTitle(req.params.gameName);

  if (game) {
    res.status(200);
    res.json({
      message: 'Game Found',
      data: game
    })
  } else {
    res.status(400);
    res.json({
      message: "Game not found"
    })
  }
}

export const addGame = async (req, res) => {
  const addedGame = await db.addGame(req.body);

  res.status(201);
  res.json({
    message: "Inserted new game?",
    data: message
  })

}

export const updateGame = async (req, res) => {
  const updatedGame = await db.updateGame(req.body);

  if (updateGame) {
    res.status(201);
    res.json({
      message: "Updated the game",
      data: message
    })
  } else {
    res.status(404);
    res.json({
      message: 'Game not updated'
    })
  }


}

export const deleteGame = async (req, res) => {
  const found = await db.deleteGame(req.params.title);

  // return 200 or 404 whehter the game is found or not
  if (found) {
    res.status(200);
    res.json({
      message: "Game is found",
      data: message
    })
  } else {
    res.status(404);
    res.json({
      message: 'Game is not found'
    })
  }

}
