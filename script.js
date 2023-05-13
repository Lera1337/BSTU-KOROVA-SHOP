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
  const katal = document.querySelector('.button');
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
var button = document.getElementById("button");
if (button) {
  button.addEventListener("click", function () {
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
    // Please sync "Desktop-2" to the project
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