let click = localStorage.getItem('click_number') ? parseInt(localStorage.getItem('click_number')) : 0;
let clickPower = 1;
let autoClickPower = 0;
const show_points = document.getElementById("points");

let baseValue = document.getElementById("base-value");
let upgradesAcquireds = document.getElementById("upgrades-amount");


const images = {
    leeks: "img/default.jpg",
    darkmodeMoon: "img/darkmode.png",
    lightmodeSun: "img/lightmode.png",
    soundToggle: "img/sound-mute.png",
};

const darkmode = document.getElementById("dark-mode");
const reset = document.getElementById("reset");

const upgrade_itens = [
    { id: "morePoints", type: "clickPower", value: 1, img: images.leeks, title: "More Clicks", text: "+1 point per click", price: 50 },
    { id: "autoClick", type: "autoClick", value: 1, img: images.leeks, title: "Auto Click", text: "+1 point per second", price: 150 },
    { img: images.leeks, type: "clickPower", value: 1, title: "titulo 3", text: "texto 3", price: 0  },
    { img: images.leeks, type: "clickPower", value: 1, title: "titulo 4", text: "texto 4", price: 0  },
    { img: images.leeks, type: "clickPower", value: 1, title: "titulo 5", text: "texto 5", price: 0  },
    { img: images.leeks, type: "clickPower", value: 1, title: "titulo 6", text: "texto 6", price: 0  },
    { img: images.leeks, type: "clickPower", value: 1, title: "titulo 7", text: "texto 7", price: 0  },
  ];

  const list = document.getElementById("list");

  const upgradeButton = document.querySelector(".upgrades-button");
  const upgrade = document.querySelector(".upgrades");

  const settingsButton = document.querySelector(".open-settings-btn");
  const settings = document.querySelector(".settings-menu");

  const morePoints = document.getElementById("morePoints");