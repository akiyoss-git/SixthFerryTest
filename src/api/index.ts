import axios from 'axios'
import { IRow } from '../interfaces/IRow'
import { RowCreateInterface, RowUpdateInterface, RowDeleteInterface, RowGetTreeInterface } from '../interfaces/RowRequestInterface'

const API_URI: string = "http://185.244.172.108:8081/v1/outlay-rows/entity/"

export const createEntity = async () => {
  return axios.post(API_URI + "create")
}

export const getTreeRows = async (eId: number) => {
  const getTreeValue: RowGetTreeInterface = {
    eID: eId
  }
  return axios.get(API_URI + eId + "/row/list", {data: getTreeValue})
}

export const createRowEntity = async (eId: number, value: IRow) => {
  const createValue: RowCreateInterface = {
    eID: eId,
    request: value
  }
  return axios.post(API_URI + eId + "/row/create", createValue)
}

export const updateRow = async (eId: number, rId: number, value: IRow) => {
  const updateValue: RowUpdateInterface = {
    eID: eId,
    rID: rId,
    request: value
  }
  return axios.post(API_URI + eId + "/row/" + rId + "/update", updateValue)
}

export const deleteRow = async (eId: number, rId: number) => {
  const deleteValue: RowDeleteInterface = {
    eID: eId,
    rID: rId
  }
  return axios.delete(API_URI + eId + "/row/" + rId + "/delete", {data: deleteValue})
}