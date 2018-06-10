module.exports = function (app) {

    var Friend = require("../data/Friend.js");
    var path = require("path");
    var connection = require("../data/mySQLconnection.js");

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/api", function (req, res) {
        res.render("api");
    });

    app.post("/findFriend", function (req, res) {
        //console.log(req.body);
        var qResponses = [req.body.question1,
        req.body.question2,
        req.body.question3,
        req.body.question4,
        req.body.question5,
        req.body.question6,
        req.body.question7,
        req.body.question8,
        req.body.question9,
        req.body.question10];

        var personData = new Friend(
            req.body.google_id,
            req.body.name,
            req.body.photoURL,
            req.body.googlePlusURL,
            qResponses);

        // add us to the database or update us if we are already there
        connection.query(`
        INSERT INTO friends SET ?
        ON DUPLICATE KEY UPDATE ?;`,
            [{
                google_id: personData.google_id,
                name: personData.name,
                questionResponses: personData.questionResponses,
                compositeScore: personData.compositeScore,
                photoURL: personData.photoURL,
                googlePlusURL: personData.googlePlusURL
            },
            {
                name: personData.name,
                questionResponses: personData.questionResponses,
                compositeScore: personData.compositeScore,
                photoURL: personData.photoURL,
                googlePlusURL: personData.googlePlusURL
            }],
            function (err, queryResult) {

                if (err) { console.log(err); }

                // now that we have put ourselves in the database,
                // we need to search for a friend with a similar composite score
                // for now this query is fine, but eventually with a larger
                // user base you would have to do something different like:
                /*
                SELECT * FROM friends
                WHERE NOT google_id=? AND compositeScore=composite LIMIT 1;
                */
                connection.query(`SELECT * FROM friends
                WHERE NOT google_id=?;`, [personData.google_id],
                    function (err, queryResult) {

                        if (err) { console.log(err); }

                        //console.log(queryResult);
                        var closestFriend = queryResult[0];
                        for (var i = 1; i < queryResult.length; i++) {
                            if (Math.abs(personData.compositeScore - closestFriend.compositeScore) >
                                Math.abs(personData.compositeScore - queryResult[i].compositeScore)) {
                                closestFriend = queryResult[i];
                            }
                        }
                        console.log(closestFriend);
                        res.render("findFriend",
                            {
                                personData: personData,
                                friendData: closestFriend
                            });
                    });
            });
    });

    app.get("/styles/style.css", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/styles/style.css"));
    });

    app.get("/js/app.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/js/app.js"));
    });

    app.get("/images/tony.png", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/tony.png"));
    });

    app.get("/images/andrey.png", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/andrey.png"));
    });

    app.get("/images/connor.png", function (req, res) {
        res.sendFile(path.join(__dirname, "../data/connor.png"));
    });

}