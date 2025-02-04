import express from 'express';
import router from './routers/gamesRouter.js';

const app = express()

app.use('/games', router);

app.listen(7300, () => {
  console.log('Server started on port 7300')
})