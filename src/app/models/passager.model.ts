/**
 * Random User Generator
 * https://randomuser.me/documentation
 */
export interface IPassagerDto {
  name: {
    title: string,
    first: string,
    last: string
  },
  email: string,
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  }
}

export enum ClasseVol {
  STANDARD,
  BUSINESS,
  PREMIUM
}

export interface IPassager {
  nom: string;
  email: string;
  image: string;
  classeVol: string;
  nbBagagesSoute: number;
}

export class Passager implements IPassager {
  nom: string;
  email: string;
  image: string;
  classeVol: string;
  nbBagagesSoute: number;

  constructor(dto: IPassagerDto) {
    this.nom = dto.name.first + ' ' + dto.name.last;
    this.email = dto.email;
    this.image = dto.picture.medium;
    this.classeVol = getRandomClasseVol();
    this.nbBagagesSoute = getRandomNombreBagages();
  }
}

export function getRandomClasseVol(): string {
  // index entre 0 et 3 exclus
  return ClasseVol[Math.floor(Math.random() * 3)];
}

export function getRandomNombreBagages(): number {
  // index entre 0 et 4 exclus
  return Math.floor(Math.random() * 4);
}
