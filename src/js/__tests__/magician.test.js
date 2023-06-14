import { test, expect } from '@jest/globals';

import Magician from '../magician';

test('создает мага с правильными свойствами', () => {
  const magician = new Magician('Merlin');
  expect(magician.name).toBe('Merlin');
  expect(magician.type).toBe('Magician');
  expect(magician.health).toBe(100);
  expect(magician.level).toBe(1);
  expect(magician.attack).toBe(10);
  expect(magician.defence).toBe(40);
});
