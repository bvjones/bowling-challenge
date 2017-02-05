'use strict';

var Frame = function(){
  this._frameScore = []
}

Frame.prototype.add = function(score) {
  this._frameScore.push(score)
};

Frame.prototype.score = function() {
  return this._frameScore.reduce(function(a,b) {
    return a + b
  });
};

Frame.prototype._firstRoll = function () {
  return this._frameScore[0];
};

Frame.prototype._secondRoll = function () {
  return this._frameScore[1];
};

Frame.prototype.frameTotal = function () {
  return this._frameScore.reduce(function(a,b) {
    return a + b
  });
};

Frame.prototype.isStrike = function() {

};
