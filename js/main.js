"use strict";

const myBox = document.querySelectorAll(".box");
const myRight = document.querySelectorAll(".box-right");

myBox.forEach((element) => {
  element.addEventListener("click", function () {
    for (let i = 0; i < myRight.length; i++) {
      myRight[i].classList.remove("active");
    }

    this.nextElementSibling.classList.add("active");
  });
});

// click finis...

var pep = document.querySelector(".box-right .ketchub");
var copY = document.querySelector(".box-right .copy1");
let barbeque = document.querySelector(".box-right .barbeque")
var copY2 = document.querySelector(".box-right .copy2");





// let ketChub = document.querySelector(".box-right .ketchub");

pep.onmousedown = function (event) {
  copY.src = "images/chili-sauce.png";
  copY2.style.display = "none"

  let shiftX = event.clientX - copY.getBoundingClientRect().left;
  let shiftY = event.clientY - copY.getBoundingClientRect().top;

  copY.style.position = "absolute";
  copY.style.zIndex = 1000;
  copY.style.width = "240px";
  copY.style.height = "240px";
  document.body.append(copY);

  moveAt(event.pageX, event.pageY);

  // moves the peperonn at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    copY.style.left = pageX + shiftX + "px";
    copY.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the peperonn on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the peperonn, remove unneeded handlers
  copY.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    copY.onmouseup = null;
  };

  var canvas = document.getElementById("demo");
  var context = canvas.getContext("2d");

  canvas.onmousemove = function (e) {
    var mouseX = Math.floor(e.offsetX);
    var mouseY = Math.floor(e.offsetY);
    context.beginPath();
    context.arc(mouseX, mouseY, 30, 0, 50 * Math.PI);
    context.closePath();
    context.fillStyle = "rgb(255,0,0)";
    context.fill();
  };
};
copY.ondragstart = function () {
  return false;
};




barbeque.onmousedown = function (event) {
  copY2.src = "images/chili-sauce.png";
  copY2.style = "mix-blend-mode: luminosity"
  copY.style.display = "none"
  //   pep.removeAttribute("src", "");

  let shiftX = event.clientX - copY2.getBoundingClientRect().left;
  let shiftY = event.clientY - copY2.getBoundingClientRect().top;

  copY2.style.position = "absolute";
  copY2.style.zIndex = 1000;
  copY2.style.width = "240px";
  copY2.style.height = "240px";
  document.body.append(copY2);

  moveAt(event.pageX, event.pageY);

  // moves the peperonn at (pageX, pageY) coordinates
  // taking initial shifts into account
  function moveAt(pageX, pageY) {
    copY2.style.left = pageX + shiftX + "px";
    copY2.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // move the peperonn on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // drop the peperonn, remove unneeded handlers
  copY2.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    copY2.onmouseup = null;
  };

  var canvas = document.getElementById("demo");
  var context = canvas.getContext("2d");

  canvas.onmousemove = function (e) {
    var mouseX = Math.floor(e.offsetX);
    var mouseY = Math.floor(e.offsetY);
    context.beginPath();
    context.arc(mouseX, mouseY, 15, 0, 50 * Math.PI);
    context.closePath();
    context.fillStyle = "rgb(100, 5, 5)";
    context.fill();
  };
};
copY2.ondragstart = function () {
  return false;
};


let peperonni = document.querySelectorAll(".peperonni1")
let peperonn = document.querySelector(".peperonni")
let myPizza = document.querySelector(".crust")
let myPizz = document.querySelectorAll(".crust1")
let currentDroppable = null;
const pepBoxImg = document.querySelector('.box-pep-img');

peperonn.onmousedown = function (event) {
  event.preventDefault();
  
  let mysrc = event.target.currentSrc.substring(22);
  
  console.log(event)
  
  let pepImg = document.createElement('img');
  
  pepImg.src = `${mysrc}`

  pepImg.classList.add('peperonni')
  
  pepBoxImg.prepend(pepImg)

  let shiftX = event.clientX - peperonn.getBoundingClientRect().left;
  let shiftY = event.clientY - peperonn.getBoundingClientRect().top;

  peperonn.style.position = 'absolute';
  peperonn.style.zIndex = 1000;
  peperonn.style.width = "150px"
  document.body.append(peperonn);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    peperonn.style.left = pageX - shiftX + 'px';
    peperonn.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);

    peperonn.hidden = true;
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    peperonn.hidden = false;

    if (!elemBelow) return;

    let droppableBelow = elemBelow.closest('.droppable');
    if (currentDroppable != droppableBelow) {
      if (currentDroppable) { // null если мы были не над droppable до этого события
        // (например, над пустым пространством)
        leaveDroppable(currentDroppable);
      }
      currentDroppable = droppableBelow;
      if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
        // (например, только что покинули droppable)
        enterDroppable(currentDroppable);
      }
    }
  }

  document.addEventListener('mousemove', onMouseMove);

  peperonn.onmouseup = function () {
    document.removeEventListener('mousemove', onMouseMove);
    peperonn.onmouseup = null;
  };

};

function enterDroppable(elem) {
  elem.style.background = 'pink';
}

function leaveDroppable(elem) {
  elem.style.background = '';
}

peperonn.ondragstart = function () {
  return false;
};
