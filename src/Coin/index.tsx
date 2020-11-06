import * as React from 'react';
import './index.css'

interface CoinProps  {
  coin: string;
  oldPrice: number;
  currentPrice: number
};

export const Coin: React.FC<CoinProps> = (props) => {
  const {coin, oldPrice, currentPrice} = props;
  
  const classes = ['Coin']

  if(oldPrice < currentPrice) {
    classes.push('up')
  }

  if(oldPrice > currentPrice) {
    classes.push('down')
  }

  return (
    <div className="Card-coin">
      <div className={classes.join(' ')}>
          <span className="Coin-name">{coin}</span>
          <span>$ {currentPrice.toLocaleString()}</span>
      </div>
    </div>
  );
};

