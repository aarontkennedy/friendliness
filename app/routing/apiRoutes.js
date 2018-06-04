module.exports = function (app) {

    var path = require("path");

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Displays a single friend, or returns false
    app.get("/api/friends/:friend", function (req, res) {

        // find the requested friend
        for (var i = 0; i < friends.length; i++) {
            if (req.params.friend === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }

        return res.json(false);
    });

    // Create New Friend - takes in JSON input
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newFriend = req.body;

        newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });

}