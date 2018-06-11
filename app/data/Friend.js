const url = require("url");

// object that helps me take friend data and has everything named like
// in the database - helps for printing in the html 
function Friend(google_id, name, photoURL, googlePlusURL, scores = null) {
    this.google_id = google_id;
    this.name = name;

    // google appends a size to the img url - removing it
    let photoURLObject = url.parse(photoURL);
    this.photoURL = photoURLObject.protocol +
        "//" +
        photoURLObject.host +
        photoURLObject.pathname;

    this.googlePlusURL = googlePlusURL;

    this.compositeScore = 0;
    // just adding all the scores together for the composite score
    if (scores) {
        for (let i = 0; i < scores.length; i++) {
            this.compositeScore += parseInt(scores[i]);
        }
        // store the scores as a string
        this.questionResponses = scores.join(",");
    }
    else {
        // the user didn't want/give us the scores
        // just the other data
        this.questionResponses = null;
    }
}

module.exports = Friend;