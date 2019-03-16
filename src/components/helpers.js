import users from '../../data/users.json';
import companies from '../../data/companies.json';

const getUser = (userId) => {
  return users.find(item => item.id === userId);
};

const getCompany = (companyId) => {
  if (!companyId) {
    return null;
  }
  return companies.find(item => item.id === companyId);
};

const getCompanyInfo = (company) => {
  if (company === null) {
    return `
    <p>Company: not specified</p>
    <p>Industry: not specified</p>`
  }
  if (company.sector, company.industry === "n/a") {
    return `
    <p>Company: <a href="${company.url}" target="_blank">${company.title}</a></p>
    <p>Industry: not specified</p>`
  } else {
    return `
    <p>Company: <a href="${company.url}" target="_blank">${company.title}</a></p>
    <p>Industry: ${company.industry}/ ${company.sector}</p>`
  }
};

const getGenderInfo = (user) => {
  const str = `${user.first_name} ${user.last_name}`;
  return user.gender === 'Male'? `Mr. ${str}` : `Ms. ${str}`;
};

const formatCardNumber = (number) => {
  let formatNumber = number.replace(/(?<=\d{2})\d(?=\d{4})/g, '*');
  return formatNumber;
};

const formatDate = (seconds) => {
  let date = new Date(seconds * 1000);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day > 9 ? day : `0${day}`}/${month > 9 ? month : `0${month}`}/${year}, ${date.toLocaleTimeString("en-US")}`;
};

const getBirthdayDate = (seconds) => {
  if (seconds === 'null') {
    return 'not specified';
  } else {
    let date = new Date(seconds * 1000);
    let dateAsString = date.toLocaleDateString();
    let newDateFormat = dateAsString.replace(/\./g, "/");
    return newDateFormat;
  }
};

const showUserDetails = () => {
  let tbody = document.getElementById('tbody');
  tbody.addEventListener('click', (evt) => {
    if (evt.target.id === 'user-link') {
      evt.preventDefault();
      let target = evt.target.nextElementSibling.style.display;
      if (target === 'none') {
        evt.target.nextElementSibling.style.display = 'block';
      } else {
        evt.target.nextElementSibling.style.display = 'none';
      }
    }
  })
};

export {getUser, getCompany, getCompanyInfo, getGenderInfo, formatCardNumber, formatDate, getBirthdayDate, showUserDetails};
