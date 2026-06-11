//Load Data
let click = localStorage.getItem('click_number')
    ? parseInt(localStorage.getItem('click_number'))
    : 0;

let clickPower = localStorage.getItem('clickPower')
    ? parseInt(localStorage.getItem('clickPower'))
    : 1;

let autoClickPower = localStorage.getItem('autoClickPower')
    ? parseInt(localStorage.getItem('autoClickPower'))
    : 0;


let upgradesAcquired = localStorage.getItem("upgradesAcquired")
    ? parseInt(localStorage.getItem("upgradesAcquired"))
    : 0;

let criticalChance = localStorage.getItem("criticalChance")
    ? parseFloat(localStorage.getItem("criticalChance"))
    : 0;

let criticalMultiplier = localStorage.getItem("criticalMultiplier")
    ? parseInt(localStorage.getItem("criticalMultiplier"))
    : 1;


//DOM
const clickButton = document.querySelector(".clicker-button");

const show_points = document.getElementById("points");

const baseValue = document.getElementById("base-value");
const autoClickText = document.getElementById("auto-click");
const upgradesAcquiredText = document.getElementById("upgrades-amount");


const list = document.getElementById("list");


const upgradeButton = document.querySelector(".upgrades-button");
const upgrade = document.querySelector(".upgrades");

const settingsButton = document.querySelector(".open-settings-btn");
const settings = document.querySelector(".settings-menu");

const darkmode = document.getElementById("dark-mode");
const reset = document.getElementById("reset");

const resetMenu = document.querySelector(".reset-menu");
const resetYes = document.getElementById("confirm-reset");
const resetNo = document.getElementById("reject-reset");

const overlay = document.getElementById("overlay");

const images = {
    leeks: "img/default.jpg",
    darkmodeMoon: "img/darkmode.png",
    lightmodeSun: "img/lightmode.png",
    soundToggle: "img/sound-mute.png",
};



const upgrade_itens = [
    { id: "morePoints", img: images.leeks, type: "clickPower", value: 1,  title: "More Clicks", text: "+1 point per click", basePrice: 25,  level: 0, maxLevel: 10, unlock: 0},
    { id: "morePoints2", img: images.leeks, type: "clickPower", value: 5,  title: "More Clicks II", text: "+5 point per click", basePrice: 1000,  level: 0, maxLevel: 10, unlock: 500},
    { id: "morePoints3", img: images.leeks, type: "clickPower", value: 10,  title: "More Clicks III", text: "+10 point per click", basePrice: 10000,  level: 0, maxLevel: 10, unlock: 5000},
    { id: "autoClick", img: images.leeks, type: "autoClick", value: 1, title: "Auto Click", text: "+1 point per second", basePrice: 100,  level: 0, maxLevel: 5, unlock: 0},
    { id: "critical", img: images.leeks, type: "criticalClick", value: 1, title: "Critical Hit", text: "10% chance to deal 5x click", basePrice: 500,  level: 0, maxLevel: 1, unlock: 0},
    { id: "u4", img: images.leeks, type: "clickPower", value: 1, title: "titulo 4", text: "texto 4", basePrice: 1,  level: 0, maxLevel: 0, unlock: 0   },
    { id: "u5", img: images.leeks, type: "clickPower", value: 1, title: "titulo 5", text: "texto 5", basePrice: 1,  level: 0, maxLevel: 0, unlock: 0   },
    { id: "u6", img: images.leeks, type: "clickPower", value: 1, title: "titulo 6", text: "texto 6", basePrice: 1,  level: 0, maxLevel: 0, unlock: 0   },
    { id: "u7", img: images.leeks, type: "clickPower", value: 1, title: "titulo 7", text: "texto 7", basePrice: 1,  level: 0, maxLevel: 0, unlock: 0   },
  ];


