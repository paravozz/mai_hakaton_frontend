import * as React from 'react';
import Api from '../common/api';
import { ICell, IItem } from '../common/types';

const ItemReception = () => {
  const [barcode, setBarcode] = React.useState('');
  const [currentCell, setCurrentCell] = React.useState<ICell | null>(null);

  const [isFetching, setIsFetching] = React.useState(false);

  const [isSuccessfullyPlaced, setIsSuccessfullyPlaced] = React.useState(false);

  const getCurrentCell = () => {
    setIsFetching(true);
    Api.getAvailableCell(barcode)
      .then((cell) => { setCurrentCell(cell); setIsFetching(false); });
  };

  const processItem = () => {
    setIsFetching(true);
    Api.processItem({ barcode } as IItem, currentCell!.id)
      .then((item) => {
        setIsFetching(false);
        setIsSuccessfullyPlaced(true);
        console.log(`Вещь ${item} размещена в ячейке ${currentCell!.id}`);
        setTimeout(() => {
          setIsSuccessfullyPlaced(false);
          setBarcode('');
          setCurrentCell(null);
        }, 3000);
      });
  };

  return (
    <div className="page">
      <h2>Прием товара</h2>
      <div className="item-reception-form">
        <input
          disabled={!!currentCell || isFetching}
          type="text"
          value={barcode}
          onChange={e => setBarcode(e.currentTarget.value)}
        />
        <button
          disabled={!!currentCell || isFetching}
          type="button"
          onClick={getCurrentCell}
        >
          Получить ячейку
        </button>

        {
          currentCell
            ? (
              <div>
                <h2>Ячейка: {currentCell.id}</h2>
                <p>Разместите товар в указанной ячейке</p>
                <button
                  disabled={!currentCell || isFetching || isSuccessfullyPlaced}
                  type="button"
                  onClick={processItem}
                >
                  Подтвердить размещение
                </button>
              </div>
            ) : ''
        }
        {isSuccessfullyPlaced ? <span>Отлично, спасибо!</span> : ''}
      </div>
    </div>
  );
};


export default ItemReception;
