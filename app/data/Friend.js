var url = require("url");

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

    if (scores) {
        for (let i = 0; i < scores.length; i++) {
            this.compositeScore += parseInt(scores[i]);
        }

        this.questionResponses = scores.join(",");
    }
    else {
        this.questionResponses = null;
    }
}

module.exports = Friend;