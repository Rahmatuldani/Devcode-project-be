import { Sequelize } from "sequelize";
import config from "./config";

const { dbHost, dbPort, dbName, dbPass, dbUser } = config;
const db = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    dialect: 'mysql',
})

export async function database() {
    const sequelize = new Sequelize(`mysql://${dbUser}:${dbPass}@${dbHost}:${dbPort}`, {
        dialect: 'mysql',
        logging: false
    })

    try {
        await sequelize.query(`create database if not exists ${dbName}`)        
    } catch (error) {
        console.error(error);
    }
}

export default db;