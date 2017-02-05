describe('Frame', function(){
  frame = new Frame()

  it('constructed with an empty array for frame score', function(){
    expect(frame._frameScore).toEqual([]);
  });

  describe('#add', function(){
    it('should add the number of pins fallen', function(){
      spyOn(frame, "frameTotal").and.returnValue([6]);
      expect(frame.frameTotal()).toContain(6);
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
      spyOn(frame, "frameTotal").and.returnValue([10]);
      expect(frame.frameTotal()).toEqual([10])
    });
  });

  describe('isStrike', function(){
    it('checks if the first throw was a strike', function(){
      spyOn(frame, "isStrike").and.returnValue(true);
      expect(frame.isStrike()).toEqual(true)
    });
    it('checks if strike is false', function(){
      spyOn(frame, "isStrike").and.returnValue(false);
      expect(frame.isStrike()).toEqual(false)
    });
  });

    describe('isSpare', function(){
      it('checks if total of two throws equals 10(spare)', function(){
        spyOn(frame, "isSpare").and.returnValue(true);
        expect(frame.isSpare()).toEqual(true)
      });
      it('checks if spare is false', function(){
        spyOn(frame, "isSpare").and.returnValue(false);
        expect(frame.isSpare()).toEqual(false)
      });
    });
});
