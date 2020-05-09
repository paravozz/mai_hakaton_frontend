// import axios from 'axios';


import { ICell, IDelivery, IItem } from './types';

function delay(ms: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}


const cell: ICell = {
  id: 1,
  capacity: 5,
};


const delivery1: IDelivery = {
  id: 1,
  userCode: '123',
  items: [
    {
      id: 1,
      deliveryId: 1,
      barcode: '123',
      title: 'Вещь 1',
    },
    {
      id: 2,
      deliveryId: 1,
      barcode: '122',
      title: 'Вещь 2',
    },
    {
      id: 3,
      deliveryId: 1,
      barcode: '125',
      title: 'Вещь 3',
    },
    {
      id: 4,
      deliveryId: 1,
      barcode: '124',
      title: 'Вещь 4',
    },
    {
      id: 5,
      deliveryId: 1,
      barcode: '123',
      title: 'Вещь 5',
    },
  ],
  deliveredItems: [],
  cellIds: [1],
  client: {
    id: 1,
    FIO: 'Получатенко Клиент Офлайнович',
    telNumber: 88005553535,
  },
};

const delivery2: IDelivery = {
  id: 2,
  userCode: '321',
  items: [
    {
      id: 1,
      deliveryId: 1,
      barcode: '123',
      title: 'Вещь 1',
    },
    {
      id: 2,
      deliveryId: 1,
      barcode: '122',
      title: 'Вещь 2',
    },
    {
      id: 3,
      deliveryId: 1,
      barcode: '125',
      title: 'Вещь 3',
    },
    {
      id: 4,
      deliveryId: 1,
      barcode: '124',
      title: 'Вещь 4',
    },
    {
      id: 5,
      deliveryId: 1,
      barcode: '123',
      title: 'Вещь 5',
    },
  ],
  deliveredItems: [],
  cellIds: [2, 3],
  client: {
    id: 1,
    FIO: 'Получатенко Клиент Офлайнович',
    telNumber: 88005553535,
  },
};

const deliveries = {
  123: delivery1,
  321: delivery2,
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

  static processItem = (cellId: number, item: IItem) => {
    return delay(1000).then(() => item);
  };

  static getDelivery = (userCode: string) => {
    return delay(1000).then(() => {
      if (!Object.keys(deliveries).includes(userCode)) {
        throw Error('Такой доставки не существует');
      }

      return deliveries[userCode as '123' | '321'];
    });
  }

  static updateDelivery = (deliveryId: number, deliveryData: any) => {
    return delay(1000).then(() => {
      const delivery = Object.values(deliveries).find(d => d.id === deliveryId);

      if (delivery) {
        return { ...delivery, ...deliveryData };
      }

      return deliveryData;
    });
  }

  static postReturn = (deliveryId: number, returnedItems: any) => {
    return delay(1000).then(() => {
      const delivery = Object.values(deliveries).find(d => d.id === deliveryId);

      if (delivery) {
        return { ...delivery, returnedItems };
      }

      return returnedItems;
    });
  }
}


export default Api;
