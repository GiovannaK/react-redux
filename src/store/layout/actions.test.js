import { Creators, Types } from ".";

describe('Layout actions', () => {
  describe('Action types', () => {
    it('should return ACTION TYPE SHOW_MESSAGE', () => {
      expect(Types.SHOW_MESSAGE).toEqual('SHOW_MESSAGE')
    });

    it('should return ACTION TYPE SHOW_MESSAGE', () => {
      expect(Types.HIDE_MESSAGE).toEqual('HIDE_MESSAGE')
    });
  });

  describe('Actions creators', () => {
    it('should return action creator showMessage {type: SHOW_MESSAGE}', () => {
      expect(Creators.showMessage()).toEqual({type: Types.SHOW_MESSAGE})
    });
    it('should return action creator hideMessage {type: HIDE_MESSAGE}', () => {
      expect(Creators.hideMessage()).toEqual({type: Types.HIDE_MESSAGE})
    });
  });
});