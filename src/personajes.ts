import { CharacterTypes } from './personaje';
import { King } from './rey';
import { Fighter } from './luchador';
import { Squire } from './escudero';
import { Adviser } from './asesor';

export const personajes = () => {
  const pj1: CharacterTypes = new King('Joffrey', 'Baratheon', 25, 'rey', 10);
  const pj2: CharacterTypes = new Fighter(
    'Jaime',
    'Lannister',
    35,
    'luchador',
    'espada',
    5
  );
  const pj3: CharacterTypes = new Fighter(
    'Daenerys',
    'Targaryen',
    34,
    'luchadora',
    'dragones',
    9
  );
  const pj4: CharacterTypes = new Adviser(
    'Tyrion',
    'Lannister',
    49,
    'asesor de Daenerys'
  );
  const pj5: CharacterTypes = new Squire('Bronn', '', 27, 'escudero de Jaime');

  const charactersList = [pj1, pj2, pj3];
  charactersList.push(pj4, pj5);

  return charactersList;
};
