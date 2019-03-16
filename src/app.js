import orders from '../data/orders.json';
import createTable from './components/createTable.js';
import { showUserDetails } from './components/helpers.js';
import { sortTable } from './components/sort.js';
import createTableStatistics from './components/statistics.js';



export default (function () {
  const app = document.getElementById("app");

  app.innerHTML =
    `<table border="1" cellspacing="0" style="width:100%; margin:0 auto;">
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
    <tfoot>
    </tfoot>
  </table>`;

  createTable(orders);
  
  showUserDetails();

  sortTable();

  createTableStatistics();

}());
