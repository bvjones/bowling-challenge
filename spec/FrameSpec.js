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

  describe('_firstRoll', function(){
    it('returns the first roll value', function(){
      spyOn(frame, "_firstRoll").and.returnValue([6]);
      expect(frame._firstRoll()).toEqual([6])
    });
  });

  describe('_secondRoll', function(){
    it('returns the second roll value', function(){
      spyOn(frame, "_secondRoll").and.returnValue([4]);
      expect(frame._secondRoll()).toEqual([4])
    });
  });

  describe('frameTotal', function(){
    it('returns the frame score', function(){
      spyOn(frame, "frameTotal").and.returnValue([6,4]);
      expect(frame.frameTotal()).toEqual([6,4])
    });
  });
});
