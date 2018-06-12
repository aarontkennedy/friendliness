module.exports = function (app) {

    const Friend = require("../data/Friend.js");
    const path = require("path");
    const connection = require("../data/mySQLconnection.js");

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/api", function (req, res) {
        res.render("api");
    });

    app.post("/findFriend", function (req, res) {

        const personData = new Friend(
            req.body.google_id,
            req.body.name,
            req.body.question1,
            req.body.question2,
            req.body.question3,
            req.body.question4,
            req.body.question5,
            req.body.question6,
            req.body.question7,
            req.body.question8,
            req.body.question9,
            req.body.question10,
            req.body.photoURL,
            req.body.googlePlusURL,
        );

        // add us to the database or update us if we are already there
        connection.query(`
        INSERT INTO friends SET ?
        ON DUPLICATE KEY UPDATE ?;`,
            [personData.json(), personData.json()],
            function (err, queryResult) {

                if (err) { console.log(err); }

                // now that we have put ourselves in the database,
                // we need to search for a friend with a similar composite score - so find the friend with the closest percent match
                connection.query(`SELECT *, 
                ABS(?-question1)+
                ABS(?-question2)+
                ABS(?-question3)+
                ABS(?-question4)+
                ABS(?-question5)+
                ABS(?-question6)+
                ABS(?-question7)+
                ABS(?-question8)+
                ABS(?-question9)+
                ABS(?-question10) AS difference
                FROM friends
                WHERE NOT google_id=?
                ORDER BY difference LIMIT 6;`,
                    [personData.q1,
                    personData.q2,
                    personData.q3,
                    personData.q4,
                    personData.q5,
                    personData.q6,
                    personData.q7,
                    personData.q8,
                    personData.q9,
                    personData.q10,
                    personData.google_id],
                    function (err, queryResult) {

                        if (err) { console.log(err); }

                        console.log(queryResult);
                        let closestFriend = queryResult.shift();

                        res.render("findFriend",
                            {
                                personData: personData,
                                friendData: closestFriend,
                                otherCloseMatches: queryResult
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