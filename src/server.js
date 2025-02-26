import express from 'express';
// import router from './routers/gamesRouter.js';

import cors from 'cors';

const app = express()

//allow cross origin script requests
app.use(cors({
  origin: "*"
}));

//serve up static files
app.use(express.static("./public"));

// for parsing JSON payloads (eg. get req body for POST addGame() ) 
app.use(express.json());

// app.use('/games', router);

app.listen(7300, () => {
  console.log('Server started on port 7300')
})