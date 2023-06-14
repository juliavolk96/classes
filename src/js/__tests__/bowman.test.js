import { test, expect } from '@jest/globals';

import Bowman from '../bowman';

test('создает лучника с правильными свойствами', () => {
  const bowman = new Bowman('Robin');
  expect(bowman.name).toBe('Robin');
  expect(bowman.type).toBe('Bowman');
  expect(bowman.health).toBe(100);
  expect(bowman.level).toBe(1);
  expect(bowman.attack).toBe(25);
  expect(bowman.defence).toBe(25);
});
