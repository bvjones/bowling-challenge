describe('Scorecard', function(){
  scorecard = new Scorecard()

  it('constructed with an empty array for score', function(){
    expect(scorecard.overallScore).toEqual([])
  });

  describe('#addScore', function(){
    it('should add the last frame score to overall score', function(){
      scorecard.overallScore = [1,6]
      expect(scorecard.overallScore).toContain(6)
    });
  });

});
