// scroll
let goUpBtn = document.querySelector("#goUp");
window.onscroll=_=>{
  if(window.scrollY >= 200){
    goUpBtn.classList.remove("d-none");
  }
  else{
    goUpBtn.classList.add("d-none");
  }
}
// cart header
var iconCart = document.querySelector("nav .fa-cart-shopping"),
    carticon = document.querySelector("div.car");
    let open = false;
    iconCart.onclick = _=>{
      open = !open;
      if (!open) {
        //
        iconCart.classList.remove("active");
        carticon.classList.remove("showing");
      } else {
        men.classList.remove("active");
        menu.classList.remove("showing");
        //
        iconCart.classList.add("active");
        carticon.classList.add("showing");
      }
}
// men header
var men = document.querySelector("nav .men"),
    menu = document.querySelector(" menu");
    men.onclick = _=>{
      console.log("aaaaaaaaaa");
      open = !open ;
      if (!open) {
        men.classList.remove("active");
        menu.classList.remove("showing");
      } else {
        iconCart.classList.remove("active");
        carticon.classList.remove("showing");
        //
        men.classList.add("active");
        menu.classList.add("showing");
      }
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
// cart add
let pre = document.querySelectorAll(".pre");
let text = document.querySelectorAll(" .cunter");
let next = document.querySelectorAll(" .next");
for (let i = 0; i < pre.length; i++) {
  pre[i].addEventListener("click" ,_=>{
    increis()
  })
  function increis(){
    if(text[i].innerText == 1){
      text[i].innerText=1;
      pre[i].classList.add("active");
    }
    else{
      text[i].innerText -=1;
    }
  }
}
for (let i = 0; i < next.length; i++) {
  next[i].addEventListener("click",_=>{
    let num = +text[i].innerText;
    num += 1;
    text[i].innerText = num;
  })
  
}
  
// btn
//----------------------------------------------------------
// on click button go Up  scrollto up page

let addBn = document.querySelector(".quantity .add");
let parnt =addBn.parentElement.parentElement.parentElement.parentElement.parentElement;
// console.log(parnt);
let cartList = JSON.parse(localStorage.getItem("cartds")) || [];
// event click add cart
addBn.onclick = event =>{
      event.preventDefault()
      colletDatacart(addBn)
}
//----------------------------------------------------------
// Function Collect cart data 
function colletDatacart(item) {
  let Img = parnt.querySelector("#MainImg").src ,
      nameImg = parnt.querySelector(".tittle p").innerText,
      pricImg=parnt.querySelector(".pric-title .pricNum").innerText,
      colorImg = parnt.querySelector(".colors .box.active"),
      sizeImg = parnt.querySelector("select"),
      cuontImg = parnt.querySelector (".cunter");



    // add new 
    let cartObject = {
      imgSrc: Img,
      name: nameImg,
      size : sizeImg.value,
      count: cuontImg.innerText,
      price: pricImg,
      color: colorImg.id
    }
  
    cartList.push(cartObject)
  localStorage.setItem("cartds", JSON.stringify(cartList));

  show()
}
// //---------------------------------------------------------------
// Function show all cart store in loacl storage in list  Cart
const carBodyList = document.querySelector("table tbody"),
  allTotalEl = document.querySelector(".pric-totle .totle"),
  carNumEl = document.querySelector("header .number-icon");
function show() {
  let sum = 0
  carBodyList.innerHTML = ""

  cartList.forEach( (car , ind)=> {
    let totle = car.price  * car.count  
    sum += totle 
    let contentcart =
      `
      <tr>
      <td class="img-desc">
        <img src="${car.imgSrc}" alt="img">
        <div class="text">
          <h6>${car.name}</h6>
          <p>#261311</p>
        </div>
      </td>
      <td>${car.color}</td>
      <td >${car.size}</td>
      <td class="ammount">
        <div class="box">
          <button class="pre btn" onclick=decs(this,${ind})>-</button>
          <div class="cunter">${car.count}</div>
          <button class="next btn" onclick=incs(this,${ind})>+</button>
        </div>
      </td>
      <td class="totle">$ ${totle.toFixed(3)}</td>
      <td class="btn-close" onclick =delcar(${ind}) ></td>
    </tr>
    `
    carBodyList.innerHTML += contentcart ;
  });
  allTotalEl.innerText =  sum.toFixed(3) ;
  carNumEl.innerText = cartList.length;
}

show()

const delAllBtn = document.querySelector("button#deleteAllcar") ;
delAllBtn.onclick = _=>{
  console.log(delAllBtn);

}
delAllBtn.onclick = deleteAllcarts
// Function delete all cart list in cart
function deleteAllcarts() {
  localStorage.removeItem("cartds");
  cartList = []
  show();
}

// Function delete on cart list in cart
function delcar( index) {
  cartList.splice(index , 1)
  localStorage.setItem("cartds", JSON.stringify(cartList));
  show()
}
//Function decs & incs on cart list in cart
function decs(ele,id) {
  let oldcunt = ele.nextElementSibling.innerText;
  if(oldcunt == 1){
    oldcunt =1;
  }
  else{
    oldcunt -=1;
  }
  ele.nextElementSibling.innerText = oldcunt;
  cartList[id].count =  oldcunt
    localStorage.setItem("cartds", JSON.stringify(cartList));
  show()
}
function incs(ele,id) {
  let oldcuntplus = ele.previousElementSibling.innerText;
  console.log(oldcuntplus);
  let num = +oldcuntplus;
  num += 1;
  oldcuntplus = num; 
  ele.previousElementSibling.innerText = oldcuntplus;
  cartList[id].count =  oldcuntplus
  localStorage.setItem("cartds", JSON.stringify(cartList));
  show()
}

