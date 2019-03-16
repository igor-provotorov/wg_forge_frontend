import {getUser, getCompany, getCompanyInfo, getGenderInfo, formatCardNumber, formatDate, getBirthdayDate} from './helpers.js';

export default (arr) => {
  arr.forEach(order => {
    let user = getUser(order.user_id);
    let company = getCompany(user.company_id);

    const tr = document.createElement('tr');
    tr.id = `order_${order.id}`;

    tr.innerHTML = `
    <td data-table-cell="transaction_id">${order.transaction_id}</td>
    <td data-table-cell="user_info" class="user-data">
      <a href="#" id="user-link">${getGenderInfo(user)}</a>
        <div class="user-details" style="display:none">
          <p>Birthday: ${getBirthdayDate(+user.birthday)}</p>
          <p><img src="${user.avatar}" width="100"></p>
          ${getCompanyInfo(company)}
        </div>
    </td>
    <td data-table-cell="order_date">${formatDate(order.created_at)}</td>
    <td data-table-cell="order_amount">$${order.total}</td>
    <td>${formatCardNumber(order.card_number)}</td>
    <td data-table-cell="card_type">${order.card_type}</td>
    <td data-table-cell="location">${order.order_country} (${order.order_ip})</td>`

    document.getElementById('tbody').appendChild(tr);
  });
};
