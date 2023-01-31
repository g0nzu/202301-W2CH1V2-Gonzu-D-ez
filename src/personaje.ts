export interface CharacterTypes {
  name: string;
  family: string;
  age: number;
  role: string;
  says?: string;
  years?: number;
  weapon?: string;
  skill?: number;
}

export class Character implements CharacterTypes {
  isAlive = true;
  constructor(
    public name: string,
    public family: string,
    public age: number,
    public role: string
  ) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.role = role;
  }
}
