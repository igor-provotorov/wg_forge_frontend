import orders from '../../data/orders.json';
import createTable from './createTable.js';
import {getUser} from './helpers.js';

const compareFunc = (property) => {
  if (property === 'order_amount') {
    orders.sort((a, b) => {
      return +a.total - +b.total;
    })   
  }

  if (property === 'card_type') {
    orders.sort((a, b) => {
      let name1 = a.card_type, name2 = b.card_type;
      if (name1 < name2) {
        return -1;
      }
      if (name1 > name2) {
        return 1;
      }
      return 0;
    })   
  }

  if (property === 'transaction_id') {
    orders.sort((a, b) => {
      let transaction1 = a.transaction_id, transaction2 = b.transaction_id;
      if (transaction1 < transaction2) {
        return -1;
      }
      if (transaction1 > transaction2) {
        return 1;
      }
      return 0;
    })   
  }

  if (property === 'order_date') {
    orders.sort((a, b) => a.created_at - b.created_at);
  }

  if (property === 'user_info') {
    orders.sort((a, b) => {
      let user1 = getUser(a.user_id), user2 = getUser(b.user_id);
      let fullName1 = user1.first_name + user1.last_name, fullName2 = user2.first_name + user2.last_name;
      if (fullName1 < fullName2) {
        return -1;
      }
      if (fullName1 > fullName2) {
        return 1;
      }
      return 0;
    })   
  }

  if (property === 'location') {
    orders.sort((a, b) => {
      let country1 = a.order_country, country2 = b.order_country;
      let ip1 = a.order_ip, ip2 = b.order_ip;

      if (country1 < country2) {
        return -1;
      }

      if (country1 > country2) {
        return 1;
      }

      if (country1 === country2) {
        if (ip1 < ip2) {
          return -1;
        }
        if (ip1 > ip2) {
          return 1;
        }
        return 0;
      }
    })
  }

  return orders;
};

const sortTable = () => {
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
      createTable(compareFunc(firstCell));
    }
  })
};

export {compareFunc, sortTable};
