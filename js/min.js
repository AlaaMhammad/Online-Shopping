// scroll header
let header = document.querySelector("header nav"),
  imgLogo1 = document.querySelector("header nav .img"),
  imgLogo2 = document.querySelector("header nav .img2"),
  links = document.querySelectorAll("header a"),
  icon1 = document.querySelector("header .fa-user"),
  icon2 = document.querySelector("header .icon"),
  goUpBtn = document.querySelector("#goUp");
window.onscroll = _=>{
  if(window.scrollY >= 200){
    header.classList.add("show");
    imgLogo1.classList.add("show");
    imgLogo2.classList.add("show");
    links.forEach(a=>{
      a.classList.add("show" , "show:hover");
    })
    icon1.classList.add("show" , "show:hover");
    icon2.classList.add("show");
    goUpBtn.classList.remove("d-none");
  }
  else{
    header.classList.remove("show");
    imgLogo1.classList.remove("show");
    imgLogo2.classList.remove("show");
    links.forEach(a=>{
      a.classList.remove("show" , "show:hover");
    })
    icon1.classList.remove("show" , "show:hover");
    icon2.classList.remove("show");
    goUpBtn.classList.add("d-none");
  }
}
// cart header
var iconCart = document.querySelector("nav .fa-cart-shopping"),
    cart = document.querySelector(" div.car");
    let open = false
    iconCart.onclick = _=>{
      open = !open ;
      if (!open) {
        //
        iconCart.classList.remove("active");
        cart.classList.remove("showing");
        //
        header.classList.remove("show");
        imgLogo1.classList.remove("show");
        imgLogo2.classList.remove("show");
        links.forEach(a=>{
          a.classList.remove("show" , "show:hover");
        })
        icon1.classList.remove("show" , "show:hover");
        icon2.classList.remove("show");
      } else {    
        men.classList.remove("active");
        menu.classList.remove("showing");
        //
        iconCart.classList.add("active");
        cart.classList.add("showing");
        //
        header.classList.add("show");
        imgLogo1.classList.add("show");
        imgLogo2.classList.add("show");
        links.forEach(a=>{
          a.classList.add("show" , "show:hover");
        })
        icon1.classList.add("show" , "show:hover");
        icon2.classList.add("show");
      }
}
// men header
var men = document.querySelector("nav .men"),
    menu = document.querySelector(" menu");
    men.onclick = _=>{
      open = !open ;
      if (!open) {
        men.classList.remove("active");
        menu.classList.remove("showing");
        //
        header.classList.remove("show");
        imgLogo1.classList.remove("show");
        imgLogo2.classList.remove("show");
        links.forEach(a=>{
          a.classList.remove("show" , "show:hover");
        })
        icon1.classList.remove("show" , "show:hover");
        icon2.classList.remove("show");
      } else {
        iconCart.classList.remove("active");
        cart.classList.remove("showing");
        //
        men.classList.add("active");
        menu.classList.add("showing");
        //
        header.classList.add("show");
        imgLogo1.classList.add("show");
        imgLogo2.classList.add("show");
        links.forEach(a=>{
          a.classList.add("show" , "show:hover");
        })
        icon1.classList.add("show" , "show:hover");
        icon2.classList.add("show");
      }
}
// slider header
var sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
var slidesCount = sliderImages.length;
var currentSlide = 1;
var slideNumberElement = document.querySelector("#slider-number");
var slideNumberLine= document.querySelector("#slider-number .line");
var nextButton = document.querySelector("#next");
var nextIcon = document.querySelector(".nex-img #next");
var prevButton = document.querySelector("#prev");
var iconBtn = document.querySelectorAll(".slider-controls i")

nextButton.onclick = nextSlide;
nextIcon.onclick = nextSlide;
prevButton.onclick = prevSlide;

for (var i = 0; i <= slidesCount; i++) {
  slideNumberElement.innerHTML = `
  <div class="cuont">0${currentSlide}</div>
  <div class="line"></div>
  <div class="numbers">0${slidesCount}</div>
  `;
  var lines = document.createElement("div");
  lines.classList.add("line","active");
  slideNumberElement.append(lines) ;
}

var sum =0;
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
    return false;
  } else {
  nextButton.classList.add("active");
    currentSlide ++;
    sum += 25;
    theChecker()
  }
}
function prevSlide() {
  if (prevButton.classList.contains("disabled")) {
    return false;
  } else {
  prevButton.classList.add("active");
    currentSlide --;
    sum -= 25;
    theChecker()
  }
}
function control () {
    if (nextButton.classList.contains("disabled")) {
      currentSlide = 1;
      sum = 0;
      theChecker()
    } else {
    nextButton.classList.add("active");
      currentSlide ++;
      sum += 25;
      theChecker()
  }
}
setInterval(control,2000);

function theChecker() {
  for (var i = 0; i <= slidesCount; i++) {
    slideNumberElement.innerHTML = `
    <div class="cuont">0${currentSlide}</div>
    <div class="line"></div>
    <div class="numbers">0${slidesCount}</div>
    `;
    var lines = document.createElement("div");
    lines.classList.add("line","active");
    lines.style.top = `${sum}%`;
    slideNumberElement.append(lines) ;
  }

    removeAllActive()
  sliderImages[currentSlide - 1].classList.add("active");
  if(currentSlide == 1){
    prevButton.classList.add("disabled");
  }
  else{
    prevButton.classList.remove("disabled");
  }
  if(currentSlide == slidesCount){
    nextButton.classList.add("disabled");
  }
  else{
    nextButton.classList.remove("disabled");
  }

}

function removeAllActive(){
  sliderImages.forEach( img =>{
    img.classList.remove("active")
  })
}
// Nwes
let imgNwe = document.querySelectorAll(".article"),
  imgNwe1 = document.querySelector(".article1");
  imgNwe1.onclick = _=>{
    imgNwe1.classList.replace("col-lg-3","col-lg-6");
    imgNwe[1].classList.replace("col-lg-6","col-lg-3");
    imgNwe[0].classList.replace("col-lg-6","col-lg-3");
  }
    imgNwe[0].onclick =show;
    imgNwe[1].onclick =show2;
    function show(){
        imgNwe1.classList.replace("col-lg-6","col-lg-3");
        imgNwe[1].classList.replace("col-lg-6","col-lg-3");
        imgNwe[0].classList.replace("col-lg-3","col-lg-6");
    }
    function show2(){
        imgNwe1.classList.replace("col-lg-6","col-lg-3");
        imgNwe[0].classList.replace("col-lg-6","col-lg-3");
        imgNwe[1].classList.replace("col-lg-3","col-lg-6");
    }
// card slider
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
// card slider
var swiper = new Swiper(".slide-container2", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});