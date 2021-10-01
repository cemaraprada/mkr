const conf = {
  exchange: 'binance',
  market: 'SOL/USDT',

  pollInfo: 1000,
  pollOrders: 1000,
  pollReport: 1000,

  adjustSpread: true,
  minWidthPercent: 0.87,
  minWidthPercentIncrement: 0.87,
  orderCountMin: 2,
  orderCountBuy: 1,
  orderCountBuyMin: 1,
  orderCountSell: 1,
  orderCountSellMin: 1,
  orderSize: 0.08,
  orderSizeMultiplier: 1.08,
  saveReport: false,
  aggressive: true,

  binance: {
    apiKey: 'xxx',
    secret: 'xxx'
  }
}

module.exports = conf
