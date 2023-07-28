import { Sequelize } from 'sequelize';
import { configObj } from "../config/config.js";
import { setupModels } from "../db/models/index.js";

const USER = encodeURIComponent(configObj.dbUser);
const PASSWORD = encodeURIComponent(configObj.dbPassword);
const URI = 
    `postgres://${USER}:${PASSWORD}@${configObj.dbHost}:${configObj.dbPort}/${configObj.dbName}`;

const sequelizeClient = new Sequelize(URI, {
    dialect: 'postgres',
    logging: false
});

setupModels(sequelizeClient);

sequelizeClient.sync();

export { sequelizeClient };