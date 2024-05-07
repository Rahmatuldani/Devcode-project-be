import dotenv from 'dotenv';

dotenv.config();

const config = {
    name: process.env.APP_NAME ?? "Undefined"
}

export default config;