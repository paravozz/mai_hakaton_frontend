import * as React from 'react';
import Api from '../common/api';
import { ICell } from '../common/types';

const ItemReception = () => {
  const [barcode, setBarcode] = React.useState<number>(0);
  const [currentCell, setCurrentCell] = React.useState<ICell | null>(null);

  const [isFetching, setIsFetching] = React.useState(false);

  const [isSuccessfullyPlaced, setIsSuccessfullyPlaced] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const getCurrentCell = () => {
    setIsFetching(true);
    Api.getAvailableCell(barcode)
      .then(({ data: { cell } }) => { setCurrentCell({ id: cell }); setError(null); })
      .catch(({ response: { data: err } }) => setError(err.error))
      .finally(() => { setIsFetching(false); });
  };

  const processItem = () => {
    setIsFetching(true);
    Api.processItem(currentCell!.id, barcode)
      .then((item) => {
        setIsFetching(false);
        setIsSuccessfullyPlaced(true);
        console.log(`Вещь ${item} размещена в ячейке ${currentCell!.id}`);
        setTimeout(() => {
          setIsSuccessfullyPlaced(false);
          setBarcode(0);
          setCurrentCell(null);
        }, 3000);
      });
  };

  return (
    <div className="page">
      <h2>Прием товара</h2>

      <div className="form item-reception-form" style={{ width: '300px' }}>
        <div className="form-input">
          <label htmlFor="barcode-input">Штрихкод товара</label>
          <input
            id="barcode-input"
            disabled={!!currentCell || isFetching}
            type="number"
            value={barcode || ''}
            onChange={e => setBarcode(parseInt(e.currentTarget.value, 10))}
          />
        </div>
        <button
          disabled={!!currentCell || isFetching}
          type="button"
          onClick={getCurrentCell}
        >
          Получить ячейку
        </button>

        {error ? <span className="error">{error}</span> : ''}

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
