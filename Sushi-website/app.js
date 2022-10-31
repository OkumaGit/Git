const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const bin = document.querySelector(".bin");
let goods = document.querySelector(".goods");

// SHOPPING ITEMS ARRAY

const items = [
  {
    title: "Phila",
    weight: 250,
    price: 15,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Roll",
    weight: 500,
    price: 25,
    pieces: 6,
    img: "./img/2-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Black Dragon",
    weight: 500,
    price: 30,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Yellow fish",
    weight: 500,
    price: 30,
    pieces: 6,
    img: "./img/2-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Eel",
    weight: 500,
    price: 14,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Phila",
    weight: 250,
    price: 15,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Roll",
    weight: 500,
    price: 25,
    pieces: 6,
    img: "./img/2-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Black Dragon",
    weight: 500,
    price: 17,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Yellow fish",
    weight: 500,
    price: 21,
    pieces: 6,
    img: "./img/2-300x300.jpeg",
    qty: 0,
  },
  {
    title: "Eel",
    weight: 500,
    price: 23,
    pieces: 8,
    img: "./img/4-300x300.jpeg",
    qty: 0,
  },
];

//

// POPULATING HTML CARDS SECTION WITH JS (populateCards())

items.forEach((cardItem) => {
  cardItem = `<img class="image" src="${cardItem.img}" alt="" draggable="false">
      <div class = "item-info">
          <div class="flex sb">
              <h3 class = "title">${cardItem.title}</h3>
          </div>
          <div class="flex sb">
              <div>Weight:</div>
              <div class = "weight">${cardItem.weight}g</div>
          </div>
          <div class="flex sb">
              <div>Pieces:</div>
              <div>6</div>
          </div>
          <div class = "card-controls">
              <input class='min' type="button" value="-">
              <div class="counter">1</div>
              <input class='plu' type="button" value="+">
          </div>
          <div class="priceAndBtn flex sb">
              <div><b>$</b><b class = "price">${cardItem.price}</b></div>
              <input class="addToCart" type="button" value="Add to cart">
          </div>
      </div>`;

  const element = document.createElement("div");
  element.classList.add("item");
  element.innerHTML = cardItem;
  goods.appendChild(element);
});

//

/////// ITEMS COUNTER (TOP RIGHT CORNER)

/////// QTY COUNTERS

// sessionStorage.setItem('countItems', 0)

let itemCount = sessionStorage.getItem("countItems");

//////// GETITEM

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("cartIconWrapper")) {
    bin.classList.remove("hidden");
  }

  variable = event.target.parentElement.querySelector(".counter");
  // let ItemsCount = 0

  // minus 1 for items in cart
  if (event.target.classList == "min" && variable.innerText > 0) {
    variable.innerText--;

    if (event.target.parentElement.parentElement.classList.contains("cartItem")) {
      //////// SETITEM
      document.querySelector(".cartIcon").innerText--;
      document.querySelector(".total").innerText =
        parseInt(document.querySelector(".total").innerText) -
        1 * parseInt(event.target.parentElement.parentElement.querySelector(".cartItemPrice").innerText);
    }

    if (variable.innerText == 0 && event.target.parentElement.parentElement.classList.contains("cartItem")) {
      //// REMOVE
      event.target.parentElement.parentElement.remove();
    }
  }

  //plus 1
  if (event.target.classList == "plu") {
    variable.innerText++;

    if (event.target.parentElement.parentElement.classList.contains("cartItem")) {
      document.querySelector(".cartIcon").innerText++;
      document.querySelector(".total").innerText =
        parseInt(document.querySelector(".total").innerText) +
        1 * parseInt(event.target.parentElement.parentElement.querySelector(".cartItemPrice").innerText);
    }
  }

  //TOTAL $
});

//

/////// ADD ITEM TO CART

let buttons = document.querySelectorAll(".addToCart");
let cardItem = [];

buttons.forEach((item, i) => {
  //////// Each card add to cart button

  item.addEventListener("click", function (event) {
    let allCartItemTitles = document.querySelectorAll(".cartItemTitle");

    if (
      Array.from(allCartItemTitles).find(
        (element) =>
          element.innerText == event.target.parentElement.parentElement.querySelector(".title").innerText
      )
    ) {
      allCartItemTitles.forEach(function (key) {
        if (key.innerText == event.target.parentElement.parentElement.querySelector(".title").innerText) {
          console.log("matched");
          key.parentElement.parentElement.querySelector(".counter").innerText =
            parseInt(key.parentElement.parentElement.querySelector(".counter").innerText) +
            parseInt(event.target.parentElement.parentElement.querySelector(".counter").innerText);
        }
      });
    } else {
      cardItem[i] = `<div class="cartItem flex sb">
                <div class = "imgBlock flex">
                    <img class="cartItemImg" src="${items[i].img}" alt="" draggable="false">
                    <b class="cartItemTitle">${items[i].title}</b>
                </div>
                <b class="cartItemPrice">${items[i].price}</b>
                <div class = "card-controls">
                    <input class='min' type="button" value="-">
                    <div class="counter">${parseInt(
                      event.target.parentElement.parentElement.querySelector(".counter").innerText
                    )}</div>
                    <input class='plu' type="button" value="+">
                </div>
                </div>`;

      let cardItemToAdd = document.createElement("div"); // create empty <div>
      cardItemToAdd.classList.add("newClass"); // add class to the new <div>
      cardItemToAdd.innerHTML = cardItem[i];
      document.querySelector(".secondRow").appendChild(cardItemToAdd);
      console.log("2 else");
    }

    bin.classList.remove("hidden");

    ///// ADD EXACT NUMBER OF ITEMS TO CART

    document.querySelector(".cartIcon").innerText =
      parseInt(document.querySelector(".cartIcon").innerText) +
      parseInt(event.target.parentElement.parentElement.querySelector(".counter").innerText);

    // TOTAL $ ()

    document.querySelector(".total").innerText =
      parseInt(document.querySelector(".total").innerText) +
      parseInt(event.target.parentElement.parentElement.querySelector(".counter").innerText) *
        parseInt(event.target.parentElement.querySelector(".price").innerText);
  });
});

window.addEventListener("load", function () {
  sessionStorage.clear();
});

//

/////// SUCCESS POPUP

window.addEventListener("click", function (event) {
  if (event.target.classList.contains("purchaseBtn")) {
    document.querySelector(".popUp").classList.remove("hidden");
  }
  if (event.target.classList.contains("Okay")) {
    document.querySelector(".popUp").classList.add("hidden");
  }
});

//

/////// CLOSE CART

const close = document.querySelector(".close");
close.addEventListener("click", function () {
  bin.classList.add("hidden");
});

//

// CLONE TO CART

// function addInCart() {
//     parseFloat(binCartItem.querySelector('.cartItemPrice').innerText = "$" + items[0].price)
//     binCartItem.querySelector('.cartItemTitle').innerText = items[0].title
//     binCartItem.querySelector('.cartItemImg').src = items[0].img
//     let binCartItemClone = cartItem.cloneNode(true)
//     card.appendChild(binCartItemClone)
// }

// CLONE TO CART

// function addInCart() {
//     parseFloat(binCartItem.querySelector('.cartItemPrice').innerText = "$" + items[0].price)
//     binCartItem.querySelector('.cartItemTitle').innerText = items[0].title
//     binCartItem.querySelector('.cartItemImg').src = items[0].img
//     let binCartItemClone = cartItem.cloneNode(true)
//     card.appendChild(binCartItemClone)
// }

// SLIDER BACK AND FORWARD

let sliderIimage = ["./img/slider_1.jpeg", "./img/slider_2.jpeg"];

sliderInteger = 0;

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("left")) {
    if (sliderInteger > 0) {
      sliderInteger--;
    } else {
      sliderInteger = sliderIimage.length - 1;
    }

    document.querySelector(".slider-img").src = sliderIimage[sliderInteger];
    document.querySelector(".slider-img").classList.add("slider-img-animation");
  }

  if (event.target.classList.contains("right")) {
    if (sliderInteger >= sliderIimage.length - 1) {
      sliderInteger = 0;
    } else {
      sliderInteger++;
    }

    document.querySelector(".slider-img").src = sliderIimage[sliderInteger];
    document.querySelector(".slider-img").classList.add("slider-img-animation");
  }
});

// document.addEventListener('drag', function(){
//     document.querySelector('.slider-img').src = './img/slider_1.jpeg';
// });

setInterval(function () {
  document.querySelector(".slider-img").src = sliderIimage[sliderInteger];
  if (sliderInteger >= sliderIimage.length - 1) {
    sliderInteger = 0;
  } else {
    sliderInteger++;
  }
}, 5000);

// HTML click funtion

function extend(item) {
  item.style.width = "140px";
  item.style.boxShadow = "0px 0px 8px rgba(0, 0, 0, 0.3)";
}
