const upgradeButton = document.querySelector(".upgrades-button");
const upgrade = document.querySelector(".upgrades");

upgradeButton.addEventListener("click", () => {
    upgrade.classList.toggle("open");
});