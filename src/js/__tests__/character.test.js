import { test, expect } from '@jest/globals';
import Character from '../character';

test('Повышение уровня у живого персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBe(30);
  expect(character.defence).toBe(30);
});

test('Попытка повысить уровень умершего персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа');
});

test('Урон по живому персонажу', () => {
  const character = new Character('John', 'Bowman');
  character.damage(20);
  expect(character.health).toBe(95);
});

test('Урон по умершему персонажу', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.damage(20)).toThrowError('Нельзя нанести урон умершему персонажу');
});
