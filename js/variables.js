let click = localStorage.getItem('click_number') ? parseInt(localStorage.getItem('click_number')) : 0;
const show_points = document.getElementById("points");

const images = {
    leeks: "img/default.jpg"
};

const darkmode = document.getElementById("dark-mode");
const reset = document.getElementById("reset");

const upgrade_itens = [
    { img: images.leeks, title: "titulo 1", text: "texto 1", price: "0" },
    { img: images.leeks, title: "titulo 2", text: "texto 2", price: "0"  },
    { img: images.leeks, title: "titulo 3", text: "texto 3", price: "0"  },
    { img: images.leeks, title: "titulo 4", text: "texto 4", price: "0"  },
    { img: images.leeks, title: "titulo 5", text: "texto 5", price: "0"  },
    { img: images.leeks, title: "titulo 6", text: "texto 6", price: "0"  },
    { img: images.leeks, title: "titulo 7", text: "texto 7", price: "0"  },
  ];

  const list = document.getElementById("list");

  const upgradeButton = document.querySelector(".upgrades-button");
  const upgrade = document.querySelector(".upgrades");

  const settingsButton = document.querySelector(".settings-btn")
  const settings = document.querySelector(".footer")