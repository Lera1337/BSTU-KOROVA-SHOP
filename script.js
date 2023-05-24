// бургер меню

(function() {
  const burgerItem = document.querySelector('.burger');
  const crest = document.querySelector('.header_nav-close');
  const menu = document.querySelector('.div64');
  burgerItem.addEventListener('click', () => {
        crest.classList.add('close_active');
      });
      burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
      });
      crest.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
      });
      crest.addEventListener('click', () => {
        crest.classList.remove('close_active');
      });
}());

(function() {
const glav = document.querySelector('.button4');
const katal = document.querySelector('.button5');
const video = document.querySelector('.button3');
const predl = document.querySelector('.button1');
const kont = document.querySelector('.button2');
const menu = document.querySelector('.div64');
const crest = document.querySelector('.header_nav-close');
glav.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
katal.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
video.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
predl.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});
kont.addEventListener('click', () => {
  menu.classList.remove('header_nav_active');
});

glav.addEventListener('click', () => {
  crest.classList.remove('close_active');
});
katal.addEventListener('click', () => {
  crest.classList.remove('close_active');
});
video.addEventListener('click', () => {
  crest.classList.remove('close_active');
});
predl.addEventListener('click', () => {
  crest.classList.remove('close_active');
});
kont.addEventListener('click', () => {
  crest.classList.remove('close_active');
});
}());

// ссылки
var inst1 = document.getElementById("inst1");
if (inst1) {
inst1.addEventListener("click", function () {
  window.open("https://www.instagram.com/");
});
}

var vectorIcon1 = document.getElementById("vectorIcon1");
if (vectorIcon1) {
vectorIcon1.addEventListener("click", function () {
  window.open("https://www.facebook.com/");
});
}

var vectorIcon2 = document.getElementById("vectorIcon2");
if (vectorIcon2) {
vectorIcon2.addEventListener("click", function () {
  window.open("https://twitter.com/");
});
}

//скроллинг к нужным частям, 
var button5 = document.getElementById("button5");
if (button5) {
button5.addEventListener("click", function () {
  var anchor = document.querySelector("[data-scroll-to='container3']");
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
}

var button1 = document.getElementById("button1");
if (button1) {
button1.addEventListener("click", function () {
  var anchor = document.querySelector("[data-scroll-to='container2']");
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
}

var button2 = document.getElementById("button2");
if (button2) {
button2.addEventListener("click", function () {
  var anchor = document.querySelector("[data-scroll-to='container1']");
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
}

var button3 = document.getElementById("button3");
if (button3) {
button3.addEventListener("click", function () {
  var anchor = document.querySelector("[data-scroll-to='frameVideo']");
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
}

var button4 = document.getElementById("button4");
if (button4) {
button4.addEventListener("click", function () {
  var anchor = document.querySelector("[data-scroll-to='container']");
  if (anchor) {
    anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  }
});
}



var vectorIcon3 = document.getElementById("vectorIcon3");
if (vectorIcon3) {
vectorIcon3.addEventListener("click", function (e) {
  window.location.href = 'calc.html';
});
}


var vkorz = document.getElementById("vkorz");
if (vkorz) {
  vkorz.addEventListener("click", function (e) {
  window.location.href = 'calc.html';
});
}
var vkorz2 = document.getElementById("vkorz2");
if (vkorz2) {
  vkorz2.addEventListener("click", function (e) {
  window.location.href = 'calc.html';
});
}
var vkorz3 = document.getElementById("vkorz3");
if (vkorz3) {
  vkorz3.addEventListener("click", function (e) {
  window.location.href = 'calc.html';
});
}


var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
var observer = new IntersectionObserver(
(entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting || entry.intersectionRatio > 0) {
      const targetElement = entry.target;
      targetElement.classList.add("animate");
      observer.unobserve(targetElement);
    }
  }
},
{
  threshold: 0.15,
}
);

for (let i = 0; i < scrollAnimElements.length; i++) {
observer.observe(scrollAnimElements[i]);
}





//автоматизация фото
const tovari = {
  naush: [
    './assets/jpg/na1.jpg',
    './assets/jpg/na2.jpg',
    './assets/jpg/na3.jpg',
    './assets/jpg/na4.jpg',
    './assets/jpg/na5.jpg',
    './assets/jpg/na6.jpg',
    './assets/jpg/na7.jpg'
  ],
  acumul: [
    './assets/jpg/akk1.jpg',
    './assets/jpg/akk2.jpg',
    './assets/jpg/akk3.jpg',
    './assets/jpg/akk4.jpg',
    './assets/jpg/akk5.jpg',
    './assets/jpg/akk6.jpg',
    './assets/jpg/akk7.jpg'
  ],
  stekla: [
    './assets/jpg/st1.jpg',
    './assets/jpg/st2.jpg',
    './assets/jpg/st3.jpg',
    './assets/jpg/st4.jpg',
    './assets/jpg/st5.jpg',
    './assets/jpg/st6.jpg',
    './assets/jpg/st7.jpg'
  ],
  chehli: [
    './assets/png/3tt.png',
    './assets/png/2tt.png',
    './assets/png/1tt.png',
    './assets/png/4tt.png',
    './assets/png/5tt.png',
    './assets/png/6tt.png',
    './assets/png/7tt.png'
  ],
}

const imagesLeft = Array.from(document.querySelector('.slider_left').children);
const imagesCenter = Array.from(document.querySelector('.slider_center').children);
const imagesRight = Array.from(document.querySelector('.slider_right').children);

let tov = 'chehli';

function redrawPhoto(arr) {
  arr.forEach((image, index) => image.src = tovari[tov][index]);
}

function changeImage (event) {
  tov = event.target.dataset.tovar;
  redrawPhoto(imagesCenter);

  const buttons = document.querySelector('.portfolio-btns').children;
  Array.from(buttons).forEach(button => {
    if (button.dataset.tovar == tov) {
      button.classList.add('button_color');
    } else {
      button.classList.remove('button_color');
    };
  });
  
};

function buttonClick (event) {
  if (event.target.classList.contains('button')) {
    changeImage (event);
  };
};


document.querySelector('.portfolio-btns').addEventListener('click', buttonClick);

function shiftPhoto(arrow) {
  var el = '';
  const w = window.innerWidth >= 768 ? 2 : 1;
  if (arrow == 'left') {
    tovari[tov] =  tovari[tov].slice(w).concat( tovari[tov].slice(0, w));
  } else if (arrow == 'right') {
    tovari[tov] =  tovari[tov].slice(-w).concat( tovari[tov].slice(0, -w));
  }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_left');
  shiftPhoto('left');
  redrawPhoto(imagesRight);
};

function sliderRight() {
  buttonLeft.removeEventListener('click', sliderRight);
  buttonRight.removeEventListener('click', sliderLeft);
  slider.classList.add('move_right');
  shiftPhoto('right');
  redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
  redrawPhoto(imagesCenter);
  slider.classList.remove('move_left');
  slider.classList.remove('move_right');
  buttonLeft.addEventListener('click', sliderRight);
  buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);




// function changeImage (event) {
//   const tovar = event.target.dataset.tovar;
//   const tovarImages = document.querySelector('.photo__image').children;
//   Array.from(tovarImages).forEach((image, index) => image.src = tovari[tovar][index]);
  
//   const buttons = document.querySelector('.photo__buttons').children;
//   Array.from(buttons).forEach(button => {
//     if (button.dataset.tovar == tovar) {
//       button.classList.add('button_color');
//     } else {
//       button.classList.remove('button_color');
//     };
//   });
  
// };

// function buttonClick (event) {
//   if (event.target.classList.contains('button')) {
//     changeImage (event);
//   };
// };

// document.querySelector('.photo__buttons').addEventListener('click', buttonClick);