export interface IItem {
  id: number;
  deliveryId?: number;
  barcode: string;
  title?: string;
}

export interface IClient {
  id: number;
  FIO: string;
  passport?: string;
  telNumber: number;
}

export interface ICell {
  id: number;
  capacity: number;
}

export interface IDelivery {
  id: number;
  items: IItem[];
  deliveredItems: IItem[],
  client: IClient;
  cellIds: number[];
  userCode: string;
}

export interface IReturn {
  id: number;
  items: IItem[];
}
