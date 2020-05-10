export interface IItem {
  id: number;
  barcode: number;
  deliveredDate: string | null;
  returnId: number | null;
  cellId: number | null;
}

export interface IClient {
  id: number;
  FIO: string;
  passport?: string;
  telNumber: number;
}

export interface ICell {
  id: number;
  // capacity: number;
}

export interface IDelivery {
  id: number;
  userCode: number;
  items: IItem[];
  client: IClient | null;
}

export interface IReturn {
  id: number;
  itemId: number;
}
