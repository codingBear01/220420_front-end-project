import {
  mainPageImgs,
  sectionPageImgs,
  secOneIcons,
  secThreeIcons,
  secFourIcons,
} from './img_urls.js';

let mainImgIdx = 0;

function init() {
  getDDay();
  setTimeout(changeMainPage, 0);
  insertImgs('.sections', sectionPageImgs);
  insertImgs('.sec1_tap_icon', secOneIcons);
  insertImgs('.sec3_tap_icon', secThreeIcons);
  insertImgs('.sec4_imgs', secFourIcons);
}

function getDDay() {
  const dDayBox = document.querySelector('.d-day span');

  const dDay = new Date('2022-05-10');
  const currentDay = new Date();
  const diff = dDay - currentDay;

  const leftDay = Math.round(diff / (1000 * 60 * 60 * 24));

  return (dDayBox.innerHTML = leftDay);
}

function changeMainPage() {
  const mainPage = document.querySelectorAll('.main-page');
  const mainImg = document.querySelectorAll('.img-box');

  mainPage.forEach((page) => (page.style.display = 'none'));

  mainPage[mainImgIdx].style.display = 'block';
  mainImg[
    mainImgIdx
  ].style.backgroundImage = `url('${mainPageImgs[mainImgIdx].imgUrl}')`;
  mainImgIdx++;

  if (mainImgIdx >= mainPageImgs.length) mainImgIdx = 0;

  setTimeout(changeMainPage, 10000);
}

function insertImgs(imgClass, imgUrl) {
  const imgs = document.querySelectorAll(imgClass);

  for (let i = 0; i < imgUrl.length; i++) {
    imgs[i].style.backgroundImage = `url('${imgUrl[i].imgUrl}')`;
  }
}

init();
