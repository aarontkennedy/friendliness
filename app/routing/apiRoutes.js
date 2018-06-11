module.exports = function (app) {

    const path = require("path");
    const connection = require("../data/mySQLconnection.js");

    // Displays all friends
    app.get("/api/friends", function (req, res) {

        connection.query(`SELECT * FROM friends;`,
            function (err, queryResult) {
                if (err) { console.log(err); }

                res.json(queryResult);
            });
    });

    // Displays a single friend, or returns false
    app.get("/api/friends/:friend", function (req, res) {

        connection.query(`SELECT * FROM friends
        WHERE google_id=?;`, [req.params.friend],
            function (err, queryResult) {
                if (err) { console.log(err); }

                res.json(queryResult);
            });
    });

}