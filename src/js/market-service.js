export class MarketService {
  static getMarketDetails() {
    return fetch(`https://esi.evetech.net/latest/markets/10000002/orders/?datasource=tranquility&order_type=all&page=1
    `)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}