import {hideMessage, showMessage } from ".";

describe('Layout actions', () => {
  describe('Action types', () => {
    it('should return ACTION TYPE SHOW_MESSAGE', () => {
      expect(showMessage.type).toEqual('SHOW_MESSAGE')
    });

    it('should return ACTION TYPE SHOW_MESSAGE', () => {
      expect(hideMessage.type).toEqual('HIDE_MESSAGE')
    });
  });

  describe('Actions creators', () => {
    it('should return action creator showMessage {type: SHOW_MESSAGE}', () => {
      expect(showMessage()).toEqual({type: 'SHOW_MESSAGE'})
    });
    it('should return action creator hideMessage {type: HIDE_MESSAGE}', () => {
      expect(hideMessage()).toEqual({type: 'HIDE_MESSAGE'})
    });
  });
});