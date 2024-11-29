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

// // ============================================== Slider

// const sliderImg = document.querySelectorAll('.slider_img');
// const sliderButton = document.querySelector('.slider_button');

// let currentSliderIndex = 0;
// const paginationCircles = [];

// function hideSlider() {
//   sliderImg[currentSliderIndex].classList.remove('slider_block');
//   paginationCircles[currentSliderIndex].classList.remove(
//     'pagination-circle_active'
//   );
// }

// function showSlider() {
//   sliderImg[currentSliderIndex].classList.add('slider_block');
//   paginationCircles[currentSliderIndex].classList.add(
//     'pagination-circle_active'
//   );
// }

// function createPaginationCircles() {
//   const div = document.createElement('div');
//   div.className = 'pagination-circle';
//   sliderButton.appendChild(div);
//   paginationCircles.push(div);
// }

// function addPagination() {
//   sliderImg.forEach(createPaginationCircles);
//   paginationCircles[0].classList.add('pagination-circle_active');
//   paginationCircles.forEach((circle, index) => {
//     circle.addEventListener('click', () => changeSlide(index));
//   });
// }

// function changeSlide(slideIndex) {
//   hideSlider();
//   currentSliderIndex = slideIndex;
//   showSlider();
// }

// function nextSlide() {
//   hideSlider();
//   currentSliderIndex++;
//   if (currentSliderIndex > sliderImg.length - 1) {
//     currentSliderIndex = 0;
//   }
//   showSlider();
// }

// function previousSlider() {
//   hideSlider();
//   currentSliderIndex--;
//   if (currentSliderIndex < 0) {
//     currentSliderIndex = sliderImg.length - 1;
//   }
//   showSlider();
// }
// // setInterval(nextSlide, 3000);
// addPagination();

// -----

// const sliderSlider = document.querySelectorAll('.slider_line');
// const sliderButton = document.querySelector('.slider_button');

// // const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
// const paginationCircles = [];
// // const imgSlider = [];
// let currentSliderIndex = 0;

// function hideSlider() {
//   imgSlider[currentSliderIndex].classList.remove('slider_block');
//   paginationCircles[currentSliderIndex].classList.remove(
//     'pagination-circle_active'
//   );
// }
// function showSlider() {
//   imgSlider[currentSliderIndex].classList.add('slider_block');
//   paginationCircles[currentSliderIndex].classList.add(
//     'pagination-circle_active'
//   );
// }

// // (function createImgSlider() {
// //   images.forEach((item, index) => {
// //     const img = document.createElement('img');
// //     img.className = 'slider_img';
// //     img.alt = '';
// //     img.src = 'images/home/heroSlider/heroSlider' + images[index];
// //     sliderSlider[0].appendChild(img);
// //     imgSlider.push(img);
// //   });
// // })();

// function createPaginationCircles() {
//   const div = document.createElement('div');
//   div.className = 'pagination-circle';
//   sliderButton.appendChild(div);
//   paginationCircles.push(div);
// }

// function addPagination() {
//   images.forEach(createPaginationCircles);
//   imgSlider[0].classList.add('slider_block');
//   paginationCircles[0].classList.add('pagination-circle_active');
//   paginationCircles.forEach((circle, index) => {
//     circle.addEventListener('click', () => changeSlide(index));
//   });
// }
// addPagination();
// function changeSlide(sliderIndex) {
//   hideSlider();
//   currentSliderIndex = sliderIndex;
//   showSlider();
// }

// function nextSlider() {
//   hideSlider();
//   currentSliderIndex++;
//   if (currentSliderIndex > images.length - 1) {
//     currentSliderIndex = 0;
//   }
//   showSlider();
// }

// setInterval(nextSlider, 3000);

// -----------------------------------------------------------------------

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
