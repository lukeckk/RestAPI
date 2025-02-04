import fs from 'fs/promises';

export const getAllGames = async () => {
  let contents = await fs.readFile('./db/games.json');
  contents = JSON.parse(contents);
  console.log(`Read ${contents.length} game records`);
  return contents;
}

export const getGameByTitle = async (name) => {
  let contents = await fs.readFile('./db/games.json');
  contents = JSON.parse(contents);

  const foundGame = contents.find(game => game.title.toLowerCase() === name.toLowerCase());
  console.log(`The game is ${foundGame}`);
  return foundGame;

}

export const addGame = async (gameData) => {
  let contents = await fs.readFile('./db/games.json')
  contents = JSON.parse(contents); //convert buffered JSON text to JS object

  contents.push(gameData);
  await fs.writeFile('./db/games.json', JSON.stringify(contents, null, 4));
  console.log(`Added game ${gameData}`);
  return gameData

}

export const updateGame = async (updateGame) => {
  let contents = await fs.readFile('./db/games.json')
  contents = JSON.parse(contents); //convert buffered JSON text to JS object

  const foundGame = contents.find(game => game.title.toLowerCase() === updateGame.title.toLowerCase());

  if (foundGame) {
    foundGame.release_date = updateGame.release_date;
    foundGame.genre = updateGame.genre;
    foundGame.developer = updateGame.developer;

    await fs.writeFile('./db/games.json', JSON.stringify(contents, null, 4));

    return updateGame;
  } else {
    return null;
  }

}

export const deleteGame = async title => {
  let contents = await fs.readFile('./db/games.json')
  contents = JSON.parse(contents);

  // keep track of array length
  const numRecords = contents.length;

  // replace the array with the updated array
  contents = contents.filter(game => game.title.toLowerCase() !== title.toLowerCase());

  await fs.writeFile('./db/games.json', JSON.stringify(contents, null, 4));

  // return whether the game was found by checking the length
  return numRecords !== contents.length;

}
