class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя персонажа');
    }

    const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validTypes.includes(type)) {
      throw new Error('Некорректный тип персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить уровень умершего персонажа');
    }

    this.level += 1;
    this.attack = this.level * Math.floor(Math.random() * (10 - 1) + 1);
    this.defence = this.level * Math.floor(Math.random() * (10 - 1) + 1);
    this.health = 100;
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Нельзя нанести урон умершему персонажу');
    }

    this.health -= points;
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

export default Character;
