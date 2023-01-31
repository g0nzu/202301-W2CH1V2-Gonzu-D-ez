import { Character } from './personaje.js';

export class Squire extends Character {
  says = 'Soy un loser';
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string
  ) {
    super(name, family, age, role);
  }
}
