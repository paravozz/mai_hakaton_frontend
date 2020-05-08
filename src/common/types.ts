export interface IItem {
  id: number;
  deliveryId?: number;
  barcode: string;
}

export interface IClient {
  id: number;
  FIO: string;
  passport: string;
  telNumber: number;
}

export interface ICell {
  id: number;
  capacity: number;
}

export interface IDelivery {
  id: number;
  items: IItem[];
  client: IClient;
  cells: ICell[];
}

export interface IReturn {
  id: number;
  items: IItem[];
}
