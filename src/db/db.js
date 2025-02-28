import connection from './connection.js';

export const getAllGames = async () => {
  const [results, fields] = await connection.query(
    "SELECT * FROM games", []
  );
  return results;
}

export const getGameByTitle = async (name) => {
  const [results] = await connection.query(
    "SELECT * FROM games WHERE title = ?", [name]
  );
  return results;
}

export const addGame = async (gameData) => {
  const [results] = await connection.query(
    "INSERT INTO games (title, release_date, genre, developer, rating) VALUES (?, ?, ?, ?, ?)",
    [
      gameData.title,
      gameData.release_date,
      gameData.genre,
      gameData.developer,
      gameData.rating
    ]
  );
  return results;
}

export const updateGame = async (title, updatedGame) => {
  const [results] = await connection.query(
    "UPDATE games SET release_date = ?, genre = ?, developer = ?, rating = ? WHERE title = ?",
    [
      updatedGame.release_date,
      updatedGame.genre,
      updatedGame.developer,
      updatedGame.rating,
      title // The WHERE condition (to update the correct game)
    ]
  );
  return results;
};

export const deleteGame = async title => {
  const [results] = await connection.query(
    "DELETE FROM games WHERE title = ?", [title]
  );
  return results;

}