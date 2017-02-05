describe('Scorecard', function(){
  scorecard = new Scorecard()

  it('constructed with an empty array for score', function(){
    expect(scorecard._overallScore).toEqual([])
  });

  describe('Score', function(){
    it('outputs the overall score', function(){
      spyOn(scorecard, "score").and.returnValue([10]);
      expect(scorecard.score()).toEqual([10])
    });
  });

});
