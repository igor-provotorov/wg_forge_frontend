// this is an example of improting data from JSON
import orders from '../data/orders.json';
//import 'companies' from '../data/companies.json';
//import 'users' from '../data/users.json';

export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only
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
		<tbody>
			<tr>
				<td>1</td>
				<td>ae35d511-b468-44b4-8529-b3574cd6d319</td>
				<td>Order Date</td>
				<td>Order Amount</td>
				<td>Card Number</td>
				<td>Card Type</td>
				<td>Location</td>
			</tr>
		</tbody>
	</table>`;
	
	console.dir(orders);
}());