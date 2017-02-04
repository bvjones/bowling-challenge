'use strict';

var Frame = function(){
  this._frameScore = []
}

Frame.prototype.add = function(score) {
  this._frameScore.push(score)
};

Frame.prototype.score = function() {
  this._frameScore
};
