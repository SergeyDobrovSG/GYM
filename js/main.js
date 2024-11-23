// =========================================== search

const headerSearch = document.querySelector('.header_search');

const searchHeaderInp = document.querySelector('.search-header_inp');

const searchHeaderBtn = document.querySelector('.search-header_btn');

searchHeaderInp.addEventListener('focus', () => {
  headerSearch.classList.add('search-header_active');
});

document.addEventListener('click', function (event) {
  if (!headerSearch.contains(event.target)) {
    headerSearch.classList.remove('search-header_active');
  }
});
const inputBox = document.getElementById('myInput');
searchHeaderInp.addEventListener('blur', function () {
  headerSearch.classList.remove('search-header_active');
});

searchHeaderBtn.addEventListener('click', () => (searchHeaderInp.value = ''));

// ================================== Burger

const btnBurger = document.querySelector('.btn-burger');
const menuHeader = document.querySelector('.menu-header');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('btn-burger_active'),
    menuHeader.classList.toggle('menu-header_active');
});

// ==============================================
