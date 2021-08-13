//declaracao do que sera passado na interface
export interface CarFlags {
  dezenove: boolean;
  vinte: boolean;
}

export interface Car extends CarFlags {
  id?: string;
  ranking: string;
  model: string;
  units: string;
}

// estado inicial do form vazio
export const emptyCar: Car = {
  ranking: '',
  model: '',
  units: '',
  dezenove: false,
  vinte: false,
};
