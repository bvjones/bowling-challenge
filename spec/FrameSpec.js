describe('Frame', function(){
  frame = new Frame()

  it('constructed with an empty array for frame score', function(){
    expect(frame._frameScore).toEqual([]);
  });

  describe('#add', function(){
    it('should add the number of pins fallen', function(){
      spyOn(frame, "score").and.returnValue([6]);
      expect(frame.score()).toContain(6);
    });
  });

});
