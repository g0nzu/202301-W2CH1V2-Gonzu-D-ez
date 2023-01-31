import { Character } from './personaje.js';

export class King extends Character {
  says = 'Vais a morir todos';
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string,
    public years: number
  ) {
    super(name, family, age, role);
    this.years = years;
  }
}
