module.exports = function (app) {

    var friends = require("../data/friends.js");
    var path = require("path");

    app.get("/", function (req, res) {
        res.render("home");
    });

    app.get("/api", function (req, res) {
        res.render("api");
    });
/*  // should only get called from google callback after authentication?
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
*/
    app.post("/findFriend", function (req, res) {

        res.render("findFriend");
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