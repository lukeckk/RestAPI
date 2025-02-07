import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

//read in our environment variables from config.env
dotenv.config({
  path: "./config.env"
})

const { DB_DATABASE, DB_HOST, DB_USER, DB_PASSWORD, DB_PORT } = process.env;

//console.log(process.env);

const config = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
}

const connection = await mysql.createConnection(config);
console.log("Connected to database");

export default connection;