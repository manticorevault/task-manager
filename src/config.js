const dotenv = require("dotenv");

dotenv.config();

const { 
    PORT,
    HOST,
    HOST_URL,
    COOKIE_ENCRYPT_PWD,
    SQL_SERVER,
    SQL_DATABASE,
    SQL_USER,
    SQL_PASSWORD
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    cookiePass: COOKIE_ENCRYPT_PWD,
    sql: {
        server: SQL_SERVER,
        database: SQL_DATABASE,
        user: SQL_USER,
        password: SQL_PASSWORD,
        options: {
            encrypt: sqlEncrypt,
            enableArithAbort: true
        }
    }
}