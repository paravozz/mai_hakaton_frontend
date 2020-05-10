import * as React from 'react';
import { IDelivery } from '../common/types';


interface IDeliveryProps {
  delivery: IDelivery,
  onDeliveryReceived: (itemIds: number[]) => void,
}

const Delivery: React.FunctionComponent<IDeliveryProps> = ({ delivery, onDeliveryReceived }) => {
  const [selectedItems, setSelectedItems] = React.useState<number[]>([]);

  const onItemSelect = (itemBarcode: number) => {
    if (selectedItems.includes(itemBarcode)) {
      setSelectedItems(selectedItems.filter(i => i !== itemBarcode));
    } else {
      setSelectedItems([...selectedItems, itemBarcode]);
    }
  };

  const cellIds = Array.from(new Set(delivery.items.map(item => item.cellId))).filter(c => c !== null);

  return (
    <div className="delivery">
      <h2>
        Доставка <b>№{delivery.id}</b> {delivery.client ? <>для <b>{delivery.client.FIO}</b></> : ''}
        <br />
        <small>
          {
            // eslint-disable-next-line
            cellIds.length === 1
              ? (
                `Ячейка: ${cellIds[0]}`
              ) : (
                cellIds.length === 0 ? '' : `Ячейки: ${cellIds.join(' и ')}`
              )
          }
        </small>
      </h2>

      <div className="delivery-data">
        <div className="delivery-items-list">
          <h3>Товары:<br /><small>Отметьте обработанные товары</small></h3>
          {delivery.items.map(item => (
            // eslint-disable-next-line
            <div className={`delivery-item${!!(!item.cellId || item.returnId || item.deliveredDate) ? ' disabled' : ''}`} key={item.id}>
              <span>
                <input
                  disabled={!!(!item.cellId || item.returnId || item.deliveredDate)}
                  type="checkbox"
                  checked={selectedItems.includes(item.barcode)}
                  onChange={() => onItemSelect(item.barcode)}
                />
              </span>
              <span><b>Код: </b>{item.barcode}</span>
              <span><b>Дата доставки: </b>{item.deliveredDate || '-'}</span>
              <span><b>Ячейка: </b>{item.cellId || '-'}</span>
              <span><b>ID Возврата: </b>{item.returnId || '-'}</span>
            </div>
          ))}
        </div>

        {delivery.client && (
          <div className="delivery-client-info">
            <h3>Получатель:</h3>
            <span><b>ФИО: </b>{delivery.client.FIO}</span>
            <span><b>Телефон: </b>{delivery.client.telNumber}</span>
            {delivery.client.passport ? <span><b>Паспорт: </b>{delivery.client.passport}</span> : ''}
          </div>
        )}
      </div>

      <button type="button" onClick={() => onDeliveryReceived(selectedItems)}>
        Готово
      </button>
    </div>
  );
};


export default Delivery;
