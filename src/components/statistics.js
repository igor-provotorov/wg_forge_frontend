import { compareFunc } from './sort.js';

export default () => {
  const tfoot = document.querySelector('tfoot');

  let arr = compareFunc('order_amount'), median;
  if (arr.length % 2 === 0) {
    let median1 = (arr.length / 2) - 1;
    let median2 = (arr.length / 2) + 1;
    median = (parseFloat(arr[median1].total + arr[median2].total) / 2).toFixed(2);
  } else {
    median = arr[Math.ceil(arr.length / 2)].total;
  }

  let total = 0;
  arr.forEach(order => {
    total += Math.round(order.total * 100) / 100;
  });
  let money = total.toFixed(2);

  let countOrders = tbody.childElementCount;
  let averageCheck = (total / countOrders).toFixed(2);

  const tableRows = [...tbody.children];
  let men = 0, women = 0;
  let menMoney = 0, womenMoney = 0;
  tableRows.forEach(element => {
    let userLink = element.querySelector('#user-link');
    let money = element.querySelector(`td[data-table-cell="order_amount"]`).textContent.replace("$", "");
    if (userLink.textContent[1] === "r") {
      men++;
      menMoney += Math.round(money * 100) / 100;
    } else {
      women++;
      womenMoney += Math.round(money * 100) / 100;
    }
  });
  let averageMale = (menMoney / men).toFixed(2);
  let averageFemale = (womenMoney / women).toFixed(2);

  tfoot.innerHTML = `
  <tr>
    <td>Orders Count</td>
    <td colspan="6">${countOrders}</td>
  </tr>
  <tr>
    <td>Orders Total</td>
    <td colspan="6">$ ${money}</td>
  </tr>
  <tr>
    <td>Median Value</td>
    <td colspan="6">$ ${median}</td>
  </tr>
  <tr>
    <td>Average Check</td>
    <td colspan="6">$ ${averageCheck}</td>
  </tr>
  <tr>
    <td>Average Check (Female)</td>
    <td colspan="6">$ ${averageFemale}</td>
  </tr>
  <tr>
    <td>Average Check (Male)</td>
    <td colspan="6">$ ${averageMale}</td>
  </tr>`
};
