var mysql = require("mysql");
var path = require("path");
//
//  The connection needed for the database
//
const keys = require(path.join(__dirname, "./mySQLkeys.json"));

module.exports = mysql.createConnection({
    host: process.env.JAWSDB_host || keys.host,
    port: process.env.JAWSDB_port || keys.port,
    user: process.env.JAWSDB_user || keys.user,
    password: process.env.JAWSDB_password || keys.password,
    database: process.env.JAWSDB_database || keys.database
});