import orders from '../../data/orders.json';
import {getUser} from './helpers.js';

export default (prop) => {

  if (prop === 'order_amount') {
    orders.sort((a, b) => {
      return +a.total - +b.total;
    })   
  }

  if (prop === 'card_type') {
    orders.sort((a, b) => {
      let name1 = a.card_type, name2 = b.card_type;
      if (name1 < name2)
        return -1
      if (name1 > name2)
        return 1
      return 0 
    })   
  }

  if (prop === 'transaction_id') {
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

  if (prop === 'order_date') {
    orders.sort((a, b) => a.created_at - b.created_at);
  }

  if (prop === 'user_info') {
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

  if (prop === 'location') {
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
