import { Character } from './personaje.js';

export class Adviser extends Character {
  says = 'No sé por qué, pero creo que voy a morir pronto';
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string
  ) {
    super(name, family, age, role);
  }
}
