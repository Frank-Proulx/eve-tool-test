import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { MarketService } from './js/market-service.js';

function displayResults(response) {
  let bigTagList = "";
  let counter = 1;
  response.forEach((element) => {
    if (counter >= 20 && counter <= 50) {
      bigTagList += `<div class="market-orders"><img src="https://images.evetech.net/types/${element.type_id}/icon?size=64" alt="probably a skin that doesn't have an icon for some reason"><p>Price: ${element.price}</p><p>Derp Order Id: ${element.order_id}</p><p>Useless Type Id: ${element.type_id}</p><p>Remaining: ${element.volume_remain}</p></div>`
    }
    counter++;
  })
  $('#output').append(bigTagList);
}

$("#market").submit(function(event) {
  event.preventDefault();
  MarketService.getMarketDetails()
    .then(function(response) {
      displayResults(response);
    });
});
