import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {IDelivery} from "./types";

type AxiosPromise<T> = Promise<AxiosResponse<T>>


class Api {
  private static instance: Api;

  private _axios: AxiosInstance;


  public constructor() {
    this._axios = axios.create({
      baseURL: 'https://aviahack-mai-2020.herokuapp.com/',
    });
  }

  public static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }


  getAvailableCell = (barcode: number): AxiosPromise<{ cell: number }> => (
    this._axios.post('/get_available_cell', { barcode })
  );


  processItem = (cellId: number, itemBarcode: number): AxiosPromise<{ barcode: number, cell: number }> => (
    this._axios.post('/put_in_cell', { barcode: itemBarcode, cell: cellId })
  );


  getDelivery = (userCode: string): AxiosPromise<IDelivery> => (
    this._axios.post('/give_item', { userCode })
  );


  updateDelivery = (deliveryId: number, itemBarcodes: number[]): AxiosPromise<{ id: number, items: number[] }> => (
    this._axios.post('/fix_given_item', { id: deliveryId, items: itemBarcodes })
  );


  postReturn = (itemBarcode: number): AxiosPromise<{ returnId: number, barcode: number }> => (
    this._axios.post('/return_item', { barcode: itemBarcode })
  );
}

const api = Api.getInstance();


export default api;
