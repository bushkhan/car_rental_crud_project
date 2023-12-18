const dotenv = require('dotenv');
dotenv.config();

const {
    APP_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    APP_URL,
    DEBUG_MODE,
    JWT_SECRET,
    REFRESH_SECRET,
    DBURL,
    URL,
} = process.env;

module.exports = {
    APP_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DB_NAME,
    APP_URL,
    DEBUG_MODE,
    JWT_SECRET,
    REFRESH_SECRET,
    DBURL,
    URL,
};
