import orders from '../data/orders.json';
//import 'companies' from '../data/companies.json';
//import 'users' from '../data/users.json';

export default (function () {
  var table = document.getElementById("app");
  table.innerHTML = 
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

  // const formatDate = (str) => {
  //   return `${new Date(str*1000).toLocaleDateString("ru")}, ${new Date(str*1000).toLocaleTimeString("ru")}`
  // }

  const formatCardNumber = (str) => {
    return `${str.slice(0,2)}********${str.slice(12,16)}`
  }

  const formattingDate = (seconds) => {
    let date = new Date(seconds*1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day > 9 ? day : `0${day}` }/${month > 9 ? month : `0${month}`}/${year}, ${date.toLocaleTimeString("en-US")}`;
  }

  const tbody = document.getElementById('tbody');

  for (let i = 0; i < orders.length; i++) {
    let time = formattingDate(orders[i].created_at);
    let card = formatCardNumber(orders[i].card_number);
    tbody.innerHTML+=
    `<tr id="order_${orders[i].id}">
      <td>${orders[i].id}</td>
      <td class="user_data">${orders[i].user_id}</td>
      <td>${time}</td>
      <td>$${orders[i].total}</td>
      <td>${card}</td>
      <td>${orders[i].card_type}</td>
      <td>${orders[i].order_country} (${orders[i].order_ip})</td>
    </tr>`;
  };



}());
