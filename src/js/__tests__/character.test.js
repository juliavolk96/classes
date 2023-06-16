import { test, expect } from '@jest/globals';

import Character from '../character';

test('создает персонажа с настройками по умолчанию', () => {
  const character = new Character('John', 'Bowman');
  expect(character.name).toBe('John');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
});

test('выбрасывает ошибку при создании персонажа с некорректным именем', () => {
  expect(() => new Character('A', 'Bowman')).toThrow('Некорректное имя персонажа');
});

test('выбрасывает ошибку при создании персонажа с некорректным типом', () => {
  expect(() => new Character('John', 'Invalid')).toThrow('Некорректный тип персонажа');
});

test('повышает уровень персонажа, модифицирует свойства и устанавливает здоровье в 100', () => {
  const character = new Character('John', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(typeof character.attack).toBe('number');
  expect(typeof character.defence).toBe('number');
  expect(character.health).toBe(100);
});

test('не повышает уровень персонажа с нулевым здоровьем', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => {
    character.levelUp();
  }).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('уменьшает здоровье персонажа при получении урона', () => {
  const character = new Character('John', 'Bowman');
  character.damage(20);
  expect(character.health).toBe(80);
});

test('не уменьшает здоровье персонажа ниже нуля', () => {
  const character = new Character('John', 'Bowman');
  character.damage(150);
  expect(character.health).toBe(0);
});

test('не наносит урон персонажу с нулевым здоровьем', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => {
    character.damage(20);
  }).toThrow('Нельзя нанести урон умершему персонажу');
});
