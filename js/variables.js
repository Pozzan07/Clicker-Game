let click = localStorage.getItem('click_number') ? parseInt(localStorage.getItem('click_number')) : 0;
const show_points = document.getElementById("points");

const images = {
    leeks: "img/default.jpg",
    darkmodeMoon: "img/darkmode.png",
    lightmodeSun: "img/lightmode.png",
    soundToggle: "img/sound-mute.png",
};

const darkmode = document.getElementById("dark-mode");
const reset = document.getElementById("reset");

const upgrade_itens = [
    { img: images.leeks, title: "More Clicks", text: "+1 point per click", price: "50" },
    { img: images.leeks, title: "Auto Click", text: "+1 point per second", price: "200"  },
    { img: images.leeks, title: "titulo 3", text: "texto 3", price: "0"  },
    { img: images.leeks, title: "titulo 4", text: "texto 4", price: "0"  },
    { img: images.leeks, title: "titulo 5", text: "texto 5", price: "0"  },
    { img: images.leeks, title: "titulo 6", text: "texto 6", price: "0"  },
    { img: images.leeks, title: "titulo 7", text: "texto 7", price: "0"  },
  ];

  const list = document.getElementById("list");

  const upgradeButton = document.querySelector(".upgrades-button");
  const upgrade = document.querySelector(".upgrades");

  const settingsButton = document.querySelector(".open-settings-btn")
  const settings = document.querySelector(".settings-menu")