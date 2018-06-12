const url = require("url");

// object that helps me take friend data and has everything named like
// in the database - helps for printing in the html 
function Friend(google_id, name, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, photoURL, googlePlusURL) {
    this.google_id = google_id;
    this.name = name;

    // google appends a size to the img url - removing it
    let photoURLObject = url.parse(photoURL);
    this.photoURL = photoURLObject.protocol +
        "//" +
        photoURLObject.host +
        photoURLObject.pathname;

    this.googlePlusURL = googlePlusURL;

    this.q1 = q1;
    this.q2 = q2;
    this.q3 = q3;
    this.q4 = q4;
    this.q5 = q5;
    this.q6 = q6;
    this.q7 = q7;
    this.q8 = q8;
    this.q9 = q9;
    this.q10 = q10;

    this.getQuestionsArray = function () {
        return [this.q1,
        this.q2,
        this.q3,
        this.q4,
        this.q5,
        this.q6,
        this.q7,
        this.q8,
        this.q9,
        this.q10];
    };

    this.json = function () {
        return {
            google_id: this.google_id,
            name: this.name,
            question1: this.q1,
            question2: this.q2,
            question3: this.q3,
            question4: this.q4,
            question5: this.q5,
            question6: this.q6,
            question7: this.q7,
            question8: this.q8,
            question9: this.q9,
            question10: this.q10,
            photoURL: this.photoURL,
            googlePlusURL: this.googlePlusURL
        };

    };
}

module.exports = Friend;