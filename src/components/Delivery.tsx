import * as React from 'react';
import { IDelivery } from '../common/types';


interface IDeliveryProps {
  delivery: IDelivery,
  onDeliveryReceived: (itemIds: number[]) => void,
}

const Delivery: React.FunctionComponent<IDeliveryProps> = ({ delivery, onDeliveryReceived }) => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const onItemSelect = (itemId: number) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(i => i !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  return (
    <div className="delivery">
      <h2>
        Доставка <b>№{delivery.id}</b> для <b>{delivery.client.FIO}</b>
        <br />
        <small>
          {
            delivery.cellIds.length === 1
              ? (
                `Ячейка: ${delivery.cellIds[0]}`
              ) : (
                `Ячейки: ${delivery.cellIds.join(' и ')}`
              )
          }
        </small>
      </h2>

      <div className="delivery-data">
        <div className="delivery-items-list">
          <h3>Товары:<br /><small>Отметьте обработанные товары</small></h3>
          {delivery.items.map(item => (
            <div className="delivery-item" key={item.id}>
              <span>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => onItemSelect(item.id)}
                />
              </span>
              <span><b>Код: </b>{item.barcode}</span>
              <span><b>Наименование: </b>{item.title}</span>
            </div>
          ))}
        </div>

        <div className="delivery-client-info">
          <h3>Получатель:</h3>
          <span><b>ФИО: </b>{delivery.client.FIO}</span>
          <span><b>Телефон: </b>{delivery.client.telNumber}</span>
          {delivery.client.passport ? <span><b>Паспорт: </b>{delivery.client.passport}</span> : ''}
        </div>
      </div>

      <button type="button" onClick={() => onDeliveryReceived(selectedItems)}>
        Готово
      </button>
    </div>
  );
};


export default Delivery;
