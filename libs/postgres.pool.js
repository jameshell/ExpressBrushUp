import Pg from 'pg';
import { configObj } from "../config/config.js";

const USER = encodeURIComponent(configObj.dbUser);
const PASSWORD = encodeURIComponent(configObj.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${configObj.dbHost}:${configObj.dbPort}/${configObj.dbName}`;


const pool= new Pg.Pool({ connectionString: URI});

export { pool };