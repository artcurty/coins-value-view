import React, { useEffect, useState } from "react";
import "./index";
import { Coin } from "../Coin/index";
import { request } from "../Services/service";

interface BodyProps {}

export const Body: React.FC<BodyProps> = (props) => {
  const [coinList, setCoistList] = useState([]);

  useEffect(() => {
    let didCancel = false;
    const findData = async () =>
      request("https://api.coinranking.com/v1/public/coins").then((res) => {
        // console.log(res.data.data.coins)

        const response = res.data.data.coins.map(
          (coin: {
            symbol: any;
            name: any;
            color: any;
            price: any;
            history: any;
          }) => {
            return {
              symbol: coin.symbol,
              name: coin.name,
              color: coin.color,
              price: coin.price,
              historyPrice: coin.history[coin.history.lenght - 2],
            };
          }
        );

        setCoistList(response);
      });

    findData();

    return () => {
      didCancel = true;
    };
  }, []);

  return (
    <div className="Header">
      {coinList.map(
        (coin: {
          symbol: any;
          name: any;
          color: any;
          price: any;
          history: any;
        }) => {
          return (
            <Coin
              key={`key-${coin.symbol}-${coin.name}`}
              coin={coin.symbol}
              oldPrice={coin.history}
              currentPrice={coin.price}
            />
          );
        }
      )}
    </div>
  );
};
