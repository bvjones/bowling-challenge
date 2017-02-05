'use strict';

var Frame = function(){
  this._frameScore = new Array
}

Frame.prototype.add = function(score) {
  this._frameScore.push(score)
};

Frame.prototype._firstRoll = function () {
  return this._frameScore[0];
};

Frame.prototype._secondRoll = function () {
  return this._frameScore[1];
  frame.endOfFrame();
};

Frame.prototype.frameTotal = function () {
  return this._frameScore.reduce(function(a,b) {
    return a + b;
  });
};

Frame.prototype.isStrike = function() {
  if(this._frameScore[0] == 10) {
    return true;
  } else {return false}
};

Frame.prototype.isSpare = function () {
  this.total = this._frameScore[0] + this._frameScore[1]
  if(this.isStrike() == false && this.total == 10){
    return true
  } else {return false}
};

Frame.prototype.endOfFrame = function (){
  Array.prototype.push.apply(scorecard._overallScore, this._frameScore);
};
