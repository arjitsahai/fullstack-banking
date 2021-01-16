const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "loacalhost",
    host:5432,
    database: "bank_account"
});

module.exports = {pool};