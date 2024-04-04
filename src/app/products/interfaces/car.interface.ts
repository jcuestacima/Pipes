
export enum Modelo {
  civic, nsx, s2000, integra, supra
}


export interface Car {
  marca:   string;
  traccionRWD: boolean;
  modelo:  Modelo;
}
