import reducer from './index';

describe('Layout reducer', () => {
  it('should return intial state', () => {
    expect(reducer(undefined, {})).toEqual({ showMessage: false})
  });

  it('should return state with showMessage true', () => {
    expect(reducer(undefined, {type: 'SHOW_MESSAGE'})).toEqual({ showMessage: true})
  });

  it('should return state with showMessage false', () => {
    expect(reducer({showMessage: true}, {type: 'HIDE_MESSAGE'})).toEqual({ showMessage: false})
  });
});