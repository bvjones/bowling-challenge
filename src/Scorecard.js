var Scorecard = function(){
  this.gameArray = []
  this.overallRolls = []
}

Scorecard.prototype.score = function() {
  return this.gameArray;
};

Scorecard.prototype.totalScore = function () {
  return this.gameArray.reduce(function(a,b) {
    return a + b;
  });
};


var scorecard = new Scorecard()
var frame = new Frame()
