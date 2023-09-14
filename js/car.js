//----------------------------------------------------------
let cartList = JSON.parse(localStorage.getItem("cartds")) || [];
//---------------------------------------------------------------
// Function show all cart store in loacl storage in list  Cart
const carBodyList = document.querySelector("table tbody"),
  allTotalEl = document.querySelector(".pric-totle .totle"),
  carNumEl = document.querySelector("header .number-icon");
  function shows() {
    let sum = 0
    carBodyList.innerHTML = "";
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
        <td class="btn-close" onclick =  delcar(${ind}) ></td>
      </tr>
      `
      carBodyList.innerHTML += contentcart ;
    });
    allTotalEl.innerText =  sum.toFixed(3) ;
    carNumEl.innerText = cartList.length;
  }

shows()

const delAllBtn = document.querySelector("button#deleteAllcar") ;

delAllBtn.onclick = deleteAllcarts
// Function delete all cart list in cart
function deleteAllcarts() {
  localStorage.removeItem("cartds");
  console.log(cartList);
  cartList = []
  console.log(cartList);
  shows();
}

// Function delete on cart list in cart
function delcar(index) {
  cartList.splice(index , 1)
  localStorage.setItem("cartds", JSON.stringify(cartList));
  shows()
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
  shows()
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
  shows()
}

