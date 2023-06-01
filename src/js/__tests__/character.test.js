import { test, expect } from '@jest/globals';

import Character from '../character';

test('Создание персонажа с корректными значениями', () => {
  const character = new Character('John', 'Bowman');
  expect(character.name).toBe('John');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Создание персонажа с некорректным именем', () => {
  expect(() => new Character('', 'Bowman')).toThrow('Некорректное имя персонажа');
  expect(() => new Character('A', 'Bowman')).toThrow('Некорректное имя персонажа');
  expect(() => new Character('VeryLongName', 'Bowman')).toThrow('Некорректное имя персонажа');
});

test('Создание персонажа с некорректным типом', () => {
  expect(() => new Character('John', 'InvalidType')).toThrow('Некорректный тип персонажа');
});

test('Повышение уровня у живого персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.attack).toBeCloseTo(30, 1);
  expect(character.defence).toBeCloseTo(30, 1);
});

test('Повышение уровня умершего персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа');
});

test('Нанесение урона живому персонажу', () => {
  const character = new Character('John', 'Bowman');
  character.damage(20);
  expect(character.health).toBeCloseTo(85, 1);
});

test('Нанесение урона умершему персонажу', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.damage(20)).toThrow('Нельзя нанести урон умершему персонажу');
});

test('Создание персонажа типа Bowman', () => {
  const character = new Character('John', 'Bowman');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Создание персонажа типа Swordsman', () => {
  const character = new Character('John', 'Swordsman');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Создание персонажа типа Magician', () => {
  const character = new Character('John', 'Magician');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('Создание персонажа типа Undead', () => {
  const character = new Character('John', 'Undead');
  expect(character.attack).toBe(25);
  expect(character.defence).toBe(25);
});

test('Создание персонажа типа Zombie', () => {
  const character = new Character('John', 'Zombie');
  expect(character.attack).toBe(40);
  expect(character.defence).toBe(10);
});

test('Создание персонажа типа Daemon', () => {
  const character = new Character('John', 'Daemon');
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

test('Нанесение урона живому персонажу с здоровьем менее или равным 0', () => {
  const character = new Character('John', 'Bowman');
  character.health = -10;
  expect(() => character.damage(20)).toThrow('Нельзя нанести урон умершему персонажу');
});

test('Нанесение урона живому персонажу, превышающему его текущее здоровье', () => {
  const character = new Character('John', 'Bowman');
  character.health = 10;
  character.damage(20);
  expect(character.health).toBe(0);
});

test('Восстановление здоровья у живого персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.health = 50;
  character.heal(20);
  expect(character.health).toBe(70);
});

test('Восстановление здоровья умершего персонажа', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.heal(20)).toThrow('Нельзя восстановить здоровье умершего персонажа');
});

test('Нанесение урона живому персонажу с здоровьем равным 0', () => {
  const character = new Character('John', 'Bowman');
  character.health = 0;
  expect(() => character.damage(20)).toThrow('Нельзя нанести урон умершему персонажу');
});

test('Восстановление здоровья живого персонажа сверх максимального значения', () => {
  const character = new Character('John', 'Bowman');
  character.health = 90;
  character.heal(20);
  expect(character.health).toBe(100);
});

test('Ошибкапри использовании некорректного типа персонажа', () => {
  expect(() => {
    new Character('John', 'UnknownType');
  }).toThrowError('Некорректный тип персонажа');
});

test('Создание персонажа с неизвестным типом', () => {
  expect(() => new Character('John', 'UnknownType')).toThrow('Некорректный тип персонажа');
});
