// import axios from 'axios';


import { ICell, IItem } from './types';

function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}


const cell: ICell = {
  id: 1,
  capacity: 5,
};


class Api {
  // constructor() {
  //   this._axios = axios.create({
  //     baseURL: '/';
  //   })
  // }
  static getAvailableCell = (itemBarcode: string) => {
    return delay(1000).then(() => cell);
  };

  static processItem = (item: IItem, cellId: number) => {
    return delay(1000).then(() => item);
  }
}


export default Api;
