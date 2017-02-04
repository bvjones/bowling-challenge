describe('Frame', function(){
  frame = new Frame()

  it('constructed with an empty array for frame score', function(){
    expect(frame.frameScore).toEqual([0,0])
  });

  describe('#add', function(){
    it('should add the number of pins fallen', function(){
      frame.frameScore = [1,6]
      expect(frame.frameScore).toContain(1)
    });
  });

});
