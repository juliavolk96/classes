import { test, expect } from '@jest/globals';
import { getHealthStatus } from '../character';

test('функция возвращает "healthy", когда значение "health" больше 50', () => {
  const character = { name: 'Mar', health: 90 };
  const result = getHealthStatus(character);
  expect(result).toBe('healthy');
});

test('функция возвращает "wounded", когда значение "health" находится в диапазоне от 50 до 15', () => {
  const character = { name: 'Mar', health: 30 };
  const result = getHealthStatus(character);
  expect(result).toBe('wounded');
});

test('функция возвращает "critical", когда значение "health" меньше 15', () => {
  const character = { name: 'Mar', health: 10 };
  const result = getHealthStatus(character);
  expect(result).toBe('critical');
});
