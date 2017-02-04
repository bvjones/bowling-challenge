describe('Scorecard', function(){
  scorecard = new Scorecard()

  it('constructed with an empty array for score', function(){
    expect(scorecard._overallScore).toEqual([])
  });

});
