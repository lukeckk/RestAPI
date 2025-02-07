import express from 'express';
import router from './routers/gamesRouter.js';

const app = express()

// for parsing JSON payloads (eg. get req body for POST addGame() ) 
app.use(express.json());

app.use('/games', router);

app.listen(7300, () => {
  console.log('Server started on port 7300')
})