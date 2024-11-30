// =========================================== search

const headerSearch = document.querySelector('.search-header');

const searchHeaderInp = document.querySelector('.search-header_inp');

const searchHeaderBtn = document.querySelector('.search-header_btn');

const headerLogo = document.querySelector('.header_logo');

//открытие при клике
headerSearch.addEventListener('click', () => {
  headerSearch.classList.add('search-header_active');
});
//открытие при фокусе
searchHeaderInp.addEventListener('focus', () => {
  headerSearch.classList.add('search-header_active');
});

// закрытие поиска при клике вне поиска
document.addEventListener('click', function (event) {
  if (!headerSearch.contains(event.target)) {
    headerSearch.classList.remove('search-header_active');
  }
});

// закрытие поиска при потери фокуса
searchHeaderInp.addEventListener('blur', function () {
  headerSearch.classList.remove('search-header_active');
});

searchHeaderBtn.addEventListener('click', () => (searchHeaderInp.value = ''));

if (window.matchMedia('(max-width: 426px)').matches) {
  headerSearch.addEventListener('click', () => {
    headerLogo.classList.add('header_logo-active');
  });

  document.addEventListener('click', function (event) {
    if (!headerSearch.contains(event.target)) {
      headerLogo.classList.remove('header_logo-active');
    }
  });
}

// ================================== Burger

const btnBurger = document.querySelector('.btn-burger');
const menuHeader = document.querySelector('.menu-header');

btnBurger.addEventListener('click', () => {
  btnBurger.classList.toggle('btn-burger_active'),
    menuHeader.classList.toggle('menu-header_active');
});

// // ============================================== Slider

const images = document.querySelectorAll('.slider .slider_line img');
const sliderLine = document.querySelector('.slider .slider_line');
const sliderPagination = document.querySelector('.slider_pagination');
let paginationArr = [];
let sliderCount = 0;
let sliderWidth;

//задает нужную ширину картинки для перелистывания
function showSlider() {
  sliderWidth = document.querySelector('.slider').offsetWidth;
  sliderLine.style.sliderWidth = sliderWidth * images.length + 'px';
  images.forEach((item) => {
    item.style.sliderWidth = sliderWidth + 'px';
    item.style.height = 'auto';
  });
  rollSlider();
}

showSlider();
window.addEventListener('resize', showSlider);

function rollSlider() {
  sliderLine.style.transform =
    'translate(-' + sliderCount * sliderWidth + 'px)';
}

function nextSlider() {
  sliderCount++;
  if (sliderCount >= images.length) sliderCount = 0;

  rollSlider();
  thisSlider(sliderCount);
}

function prevSlider() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = images.length - 1;
  rollSlider();
  thisSlider(sliderCount);
}

function createPagination() {
  const div = document.createElement('div');
  div.classList.add('pagination-circle');
  sliderPagination.appendChild(div);
  paginationArr.push(div);
}
function addPagination() {
  images.forEach(() => {
    createPagination();
  });
  paginationArr[0].classList.add('pagination-circle_active');
}
addPagination();

function thisSlider(index) {
  paginationArr.forEach((item) =>
    item.classList.remove('pagination-circle_active')
  );
  paginationArr[index].classList.add('pagination-circle_active');
}

paginationArr.forEach((item, index) => {
  item.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlider(sliderCount);
  });
});
