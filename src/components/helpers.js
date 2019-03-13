import users from '../../data/users.json';
// import companies from '../../data/companies.json';

const formatCardNumber = (number) => {
  let formatNumber = number.replace(/(?<=\d{2})\d(?=\d{4})/g, '*');
  return formatNumber;
}

const formatDate = (seconds) => {
  let date = new Date(seconds * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day > 9 ? day : `0${day}`}/${month > 9 ? month : `0${month}`}/${year}, ${date.toLocaleTimeString("en-US")}`;
}

const createUserInfo = (tag, id) => {
  const link = document.createElement('a');
  link.href = '#';
  const user = users.filter(el => el.id === id);

  (user[0].gender === 'Male') ? 
  link.innerText = `Mr. ${user[0].first_name} ${user[0].last_name}` :    
  link.innerText = `Ms. ${user[0].first_name} ${user[0].last_name}`;    

  tag.appendChild(link);
}

export {formatCardNumber, formatDate, createUserInfo};
