import { test, expect } from '@jest/globals';

import Undead from '../undead';

test('creates an undead with the correct properties', () => {
  const undead = new Undead('Dracula');
  expect(undead.name).toBe('Dracula');
  expect(undead.type).toBe('Undead');
  expect(undead.health).toBe(100);
  expect(undead.level).toBe(1);
  expect(undead.attack).toBe(25);
  expect(undead.defence).toBe(25);
});
