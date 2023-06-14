import { test, expect } from '@jest/globals';

import Zombie from '../zombie';

test('создает зомби с правильными свойствами', () => {
  const zombie = new Zombie('Frank');
  expect(zombie.name).toBe('Frank');
  expect(zombie.type).toBe('Zombie');
  expect(zombie.health).toBe(100);
  expect(zombie.level).toBe(1);
  expect(zombie.attack).toBe(40);
  expect(zombie.defence).toBe(10);
});
