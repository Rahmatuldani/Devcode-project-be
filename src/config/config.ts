import dotenv from 'dotenv';

dotenv.config();

const config = {
    name: process.env.APP_NAME ?? 'Undefined',

    dbHost: process.env.MYSQL_HOST ?? 'localhost',
    dbName: process.env.MYSQL_DBNAME ?? 'todolist',
    dbUser: process.env.MYSQL_USER ?? 'root',
    dbPass: process.env.MYSQL_PASSWORD ?? 'root'
}

export default config;