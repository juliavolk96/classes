import { test, expect } from '@jest/globals';

import Swordsman from '../swordsman';

test('создает мечника с правильными свойствами', () => {
  const swordsman = new Swordsman('Arthur');
  expect(swordsman.name).toBe('Arthur');
  expect(swordsman.type).toBe('Swordsman');
  expect(swordsman.health).toBe(100);
  expect(swordsman.level).toBe(1);
  expect(swordsman.attack).toBe(40);
  expect(swordsman.defence).toBe(10);
});
