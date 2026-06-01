let clicker = document.getElementsByClassName(clicker-button)

const upgrade_itens = [
    { img: "", title: "titulo 1", text: "texto 1" },
    { img: "", title: "titulo 2", text: "texto 2" },
    { img: "", title: "titulo 3", text: "texto 3" },
    { img: "", title: "titulo 4", text: "texto 4" },
    { img: "", title: "titulo 5", text: "texto 5" },
    { img: "", title: "titulo 6", text: "texto 6" },
    { img: "", title: "titulo 7", text: "texto 7" },
  ];
  

const list = document.getElementById("list");

const upgradeButton = document.querySelector(".upgrades-button");
const upgrade = document.querySelector(".upgrades");

list.innerHTML = upgrade_itens.map(upgrade_itens => `
        <li class="upgrade-item" role="button">
        <img src="${upgrade_itens.img}" alt="">
        <h3>${upgrade_itens.title}</h3>
        <p>${upgrade_itens.text}</p>
        </li>
  `).join("");

upgradeButton.addEventListener("click", () => {
    upgrade.classList.toggle("open");
});