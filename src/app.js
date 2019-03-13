import orders from '../data/orders.json';
import {formatCardNumber, formatDate, createUserInfo} from './components/helpers.js';

export default (function () {
  const app = document.getElementById("app");

  app.innerHTML =
    `<table border="1" cellspacing="0">
    <thead>
      <tr>
        <th>Transaction ID</th>
        <th>User Info</th>
        <th>Order Date</th>
        <th>Order Amount</th>
        <th>Card Number</th>
        <th>Card Type</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>`;

  orders.forEach(order => {
    const tr = document.createElement('tr');
    tr.id = `order_${order.id}`;

    // Transaction ID
    const transactionId = document.createElement('td');
    transactionId.innerText = `${order.transaction_id}`;
    tr.appendChild(transactionId);

    // User Info
    const userInfo = document.createElement('td');
    userInfo.classList.add('user-data');
    createUserInfo(userInfo, order.user_id);
    tr.appendChild(userInfo);

    // Order Date
    const orderDate = document.createElement('td');
    let time = formatDate(`${order.created_at}`);
    orderDate.innerText = time;
    tr.appendChild(orderDate);

    // Order Amount
    const orderAmount = document.createElement('td');
    orderAmount.innerText = `$${order.total}`;
    tr.appendChild(orderAmount);

    // Card Number
    const cardNumber = document.createElement('td');
    let formatedNumber = formatCardNumber(`${order.card_number}`);
    cardNumber.innerText = formatedNumber; 
    tr.appendChild(cardNumber);        

    // Card Type
    const cardType = document.createElement('td');
    cardType.innerText = `${order.card_type}`;
    tr.appendChild(cardType);

    // Location
    const location = document.createElement('td');
    location.innerText = `${order.order_country} (${order.order_ip})`;
    tr.appendChild(location);


    document.getElementById('tbody').appendChild(tr);
  });

}());
