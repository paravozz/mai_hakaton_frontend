import * as React from 'react';
import { IDelivery } from '../common/types';
import Api from '../common/api';
import Delivery from '../components/Delivery';

const ItemReturn = () => {
  const [itemBarcode, setItemBarcode] = React.useState<number>(0);

  const [isFetching, setIsFetching] = React.useState(false);

  const [isSuccessfullyProcessed, setIsSuccessfullyProcessed] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const postReturn = () => {
    setIsFetching(true);
    setError(null);

    Api.postReturn(itemBarcode)
      .then(({ data: returned }) => {
        setIsSuccessfullyProcessed(true);
        console.log('Возврат произведен', returned);
        setTimeout(() => {
          setIsSuccessfullyProcessed(false);
          setItemBarcode(0);
        }, 2000);
      })
      .catch(({ response: { data: err } }) => setError(err.error))
      .finally(() => { setIsFetching(false); });
  };
  //
  // const processCurrentDelivery = (itemId: number) => {
  //   setIsFetching(true);
  //
  //   Api.postReturn(itemId)
  //     .then(({ data: returned }) => {
  //       setIsFetching(false);
  //       setIsSuccessfullyProcessed(true);
  //       console.log('Возврат произведен', returned);
  //       setTimeout(() => {
  //         setIsSuccessfullyProcessed(false);
  //         setUserCode('');
  //         setCurrentDelivery(null);
  //       }, 3000);
  //     });
  // };

  return (
    <div className="page">
      <h2>Возврат товара</h2>

      <div className="form item-issue-form" style={{ width: '300px' }}>
        <div className="form-input">
          <label htmlFor="return-usercode-input">Баркод товара:</label>
          <input
            id="return-usercode-input"
            disabled={isFetching}
            type="number"
            value={itemBarcode || ''}
            onChange={e => setItemBarcode(parseInt(e.currentTarget.value, 10))}
          />
        </div>
        <button
          disabled={isFetching}
          type="button"
          onClick={postReturn}
        >
          Запросить
        </button>
      </div>

      {error ? <span className="error">{error}</span> : ''}

      {isFetching ? 'Загрузка...' : ''}

      {
        isSuccessfullyProcessed
          ? <h3>Возврат оформлен, спасибо!</h3>
          : ''
      }
    </div>
  );
};


export default ItemReturn;
