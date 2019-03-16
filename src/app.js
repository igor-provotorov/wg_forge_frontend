import orders from '../data/orders.json';
import compare from './components/sort.js';
import createTable from './components/createTable.js';


export default (function () {
  const app = document.getElementById("app");

  app.innerHTML =
  `<table border="1" cellspacing="0">
    <thead>
      <tr>
        <th data-cell="transaction_id" style="cursor:pointer">Transaction ID</th>
        <th data-cell="user_info" style="cursor:pointer">User Info</th>
        <th data-cell="order_date" style="cursor:pointer">Order Date</th>
        <th data-cell="order_amount" style="cursor:pointer">Order Amount</th>
        <th>Card Number</th>
        <th data-cell="card_type" style="cursor:pointer">Card Type</th>
        <th data-cell="location" style="cursor:pointer">Location</th>
      </tr>
    </thead>
    <tbody id="tbody">
    </tbody>
  </table>`;

  createTable(orders);

  let tbody = document.getElementById('tbody');
  tbody.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (evt.target.id === 'user-link') {
      let target = evt.target.nextElementSibling.style.display;
      if (target === 'none') {
        evt.target.nextElementSibling.style.display = 'block';
      } else {
        evt.target.nextElementSibling.style.display = 'none';
      }
    }
  });

  let thead = document.querySelector('tr');
  thead.addEventListener('click', (evt) => {
    const dataCell = evt.target.getAttribute('data-cell');
    if (dataCell) {
      thead.innerHTML = `
      <tr>
        <th data-cell="transaction_id" style="cursor:pointer">Transaction ID</th>
        <th data-cell="user_info" style="cursor:pointer">User Info</th>
        <th data-cell="order_date" style="cursor:pointer">Order Date</th>
        <th data-cell="order_amount" style="cursor:pointer">Order Amount</th>
        <th>Card Number</th>
        <th data-cell="card_type" style="cursor:pointer">Card Type</th>
        <th data-cell="location" style="cursor:pointer">Location</th>
      </tr>`;

      let arrow = document.createElement('span');
      arrow.innerHTML = ' &#8595;';
      document.querySelector(`th[data-cell="${dataCell}"]`).appendChild(arrow);
      document.querySelector(`th[data-cell="${dataCell}"]`).style.background = '#3333';

      let tableCells = document.querySelectorAll(`td[data-table-cell="${dataCell}"]`);
      let firstCell = tableCells[0].dataset.tableCell;
      tbody.innerHTML = '';
      createTable(compare(firstCell));
    }
  });

}());
