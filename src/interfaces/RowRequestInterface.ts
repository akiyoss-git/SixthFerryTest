import { IRow } from "./IRow";

export interface RowCreateInterface {
  eID: number,
  request: IRow,
}

export interface RowUpdateInterface {
  eID: number,
  rID: number,
  request: IRow,
}

export interface RowDeleteInterface {
  eID: number,
  rID: number,
}

export interface RowGetTreeInterface {
  eID: number,
}