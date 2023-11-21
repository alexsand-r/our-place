"use strict";

// ------------------- burger ------------------------------
const burger = document.getElementById("burger");
const menuList = document.getElementById("menu-list");

function openBurger() {
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menuList.classList.toggle("close");
    menuList.classList.toggle("plus");
  });
}
openBurger();
