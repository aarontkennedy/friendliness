module.exports = function (app) {

    var Friend = require("../data/Friend.js");
    var friends = require("../data/friends.js");
    var path = require("path");

    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Displays a single friend, or returns false
    app.get("/api/friends/:friend", function (req, res) {

        // find the requested friend
        for (var i = 0; i < friends.length; i++) {
            if (req.params.friend === friends[i].getRouteName()) {
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

        console.log(newFriend);

        friends.push(newFriend);

        // figure out who should be their best friend
        var theirNewBestFriend = null;
        // sort the array so we don't have to always search the whole thing?
        friends = friends.sort(Friend.compare);
        
        for (var i = 0; i < friends.length; i++) {
            if (req.params.friend === friends[i].getRouteName()) {
                return res.json(friends[i]);
            }
        }

        res.json(newFriend);
    });

}