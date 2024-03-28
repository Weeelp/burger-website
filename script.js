const links = document.querySelectorAll('.menu-item > a');
const buttons = document.querySelectorAll('.product-button');
const prices = document.getElementsByClassName('products-item-price');

let burger = document.querySelector('#Burger');
let personName = document.querySelector('#name');
let phone = document.querySelector('#phone');

document.querySelector('#main-action-botton').onclick = () => {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
};

for (let i = 0; i < links.length; i++) {
  links[i].onclick = () => {
    document
      .getElementById(links[i].getAttribute('data-link'))
      .scrollIntoView({ behavior: 'smooth' });
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    document.getElementById('order').scrollIntoView({ behavior: 'smooth' });
  };
}

document.querySelector('#order-action').onclick = () => {
  let ERROR = false;

  [burger, personName, phone].forEach(item => {
    console.log(item.value);
    if (!item.value) {
      item.parentElement.style.background = 'red';
      ERROR = true;
    } else {
      item.parentElement.style.background = '';
    }
  });

  if (!ERROR) {
    [burger, personName, phone].forEach(item => {
      item.value = '';
    });
    alert('Спасибо за заказ!');
  }
  return false;
};

document.querySelector('#change-currency').onclick = e => {
  let currentCurrency = e.target.innerText;
  let newCurrency = '$';
  let coefficient = 1;

  if (currentCurrency === '$') {
    newCurrency = '₽';
    coefficient = 80;
  } else if (currentCurrency === '₽') {
    newCurrency = 'BYN';
    coefficient = 3;
  } else if (currentCurrency === 'BYN') {
    newCurrency = '€';
    coefficient = 0.9;
  } else if (currentCurrency === '€') {
    newCurrency = '¥';
    coefficient = 6.9;
  }

  e.target.innerText = newCurrency;

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText =
      +(prices[i].getAttribute('data-base-price') * coefficient).toFixed(1) +
      ' ' +
      newCurrency;
  }
};
