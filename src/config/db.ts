import { Sequelize } from "sequelize";
import config from "./config";

const { dbHost, dbName, dbPass, dbUser } = config;
const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql',
})

export default db;