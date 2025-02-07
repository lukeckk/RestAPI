import { Router } from 'express'
import { getAllGames, getGameByTitle, deleteGame, addGame, updateGame } from '../controllers/gamesController.js';

const router = Router();

router.get('/', getAllGames);
router.get('/:gameTitle', getGameByTitle)
router.post('/', addGame);
router.put('/:gameTitle', updateGame);
router.delete('/:title', deleteGame);


export default router;

