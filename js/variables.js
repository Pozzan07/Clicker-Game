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


//DOM
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
    { id: "morePoints", img: images.leeks, type: "clickPower", value: 1,  title: "More Clicks", text: "+1 point per click", basePrice: 25,  level: 0, maxLevel: 30},
    { id: "autoClick", img: images.leeks, type: "autoClick", value: 1, title: "Auto Click", text: "+1 point per second", basePrice: 100,  level: 0, maxLevel: 30  },
    { id: "u3", img: images.leeks, type: "clickPower", value: 1, title: "titulo 3", text: "texto 3", basePrice: 1,  level: 0, maxLevel: 0   },
    { id: "u4", img: images.leeks, type: "clickPower", value: 1, title: "titulo 4", text: "texto 4", basePrice: 1,  level: 0, maxLevel: 0   },
    { id: "u5", img: images.leeks, type: "clickPower", value: 1, title: "titulo 5", text: "texto 5", basePrice: 1,  level: 0, maxLevel: 0   },
    { id: "u6", img: images.leeks, type: "clickPower", value: 1, title: "titulo 6", text: "texto 6", basePrice: 1,  level: 0, maxLevel: 0   },
    { id: "u7", img: images.leeks, type: "clickPower", value: 1, title: "titulo 7", text: "texto 7", basePrice: 1,  level: 0, maxLevel: 0   },
  ];

const isRepeatable = upgrade.maxLevel > 1 || upgrade.maxLevel === Infinity;
