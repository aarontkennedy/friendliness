
function Friend(name, photoLink, scores) {
    var name = name;
    var linkToPhoto = photoLink;
    var scores = scores;
    var score = null;
    var routeName = null;

    this.getName = function () { return name };
    this.getPhotoLink = function () { return linkToPhoto };
    this.getScores = function () { return scores };

    this.getRouteName = function () {
        if (!routeName) {
            routeName = name.replace(/\s+/g, "").toLowerCase();
        }
        return routeName;
    };

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    this.getScore = function () {
        if (!score) {
            score = scores.reduce(reducer);
        }
        return score;
    };
}

Friend.compare = function (a, b) {
    if (a.getScore() < b.getScore()) {
      return -1;
    }
    if (a.getScore() > b.getScore()) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

module.exports = Friend;