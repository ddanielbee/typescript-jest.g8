import { testFn } from './index';

describe('Test function', () => {
  it('should work', () => {
    expect(testFn(1, 2)).toBe(3);
  });
});
