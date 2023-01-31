import { Character } from './personaje.js';

export class Fighter extends Character {
  says = 'Primero pego y luego pregunto';
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public weapon: string,
    public skill: number
  ) {
    super(name, family, age, role);
    this.weapon = weapon;
    this.skill = skill;
  }
}
