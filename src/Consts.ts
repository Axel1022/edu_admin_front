export const API = "https://localhost:7194";
export interface ICarrera {
  id: number;
  name: "string";
}
export interface IAdmitidoComo {
  id: number;
  description: "string";
}
export interface IEstudiante {
  id: number;
  name: "string";
  apellido: "string";
  correo: "string";
  idCarrera: number;
  idAdmitidoComo: number;
}
