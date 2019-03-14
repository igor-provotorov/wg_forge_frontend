import orders from '../data/orders.json';
import {getUser, getCompany, getCompanyInfo, getGenderInfo, formatCardNumber, formatDate, getBirthdayDate} from './components/helpers.js';

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
    let user = getUser(order.user_id);
    let company = getCompany(user.company_id);

    const tr = document.createElement('tr');
    tr.id = `order_${order.id}`;

    tr.innerHTML = `
    <td>${order.transaction_id}</td>
    <td class="user-data">
      <a href="#" id="user-link">${getGenderInfo(user)}</a>
        <div class="user-details" style="display:none">
          <p>Birthday: ${getBirthdayDate(+user.birthday)}</p>
          <p><img src="${user.avatar}" width="100"></p>
          ${getCompanyInfo(company)}
        </div>
    </td>
    <td>${formatDate(order.created_at)}</td>
    <td>$${order.total}</td>
    <td>${formatCardNumber(order.card_number)}</td>
    <td>${order.card_type}</td>
    <td>${order.order_country} (${order.order_ip})</td>`

    document.getElementById('tbody').appendChild(tr);
  });

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

}());
