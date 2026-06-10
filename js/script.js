//save function
function saveGame() {
    localStorage.setItem('click_number', click);
    localStorage.setItem('clickPower', clickPower);
    localStorage.setItem('autoClickPower', autoClickPower);
    localStorage.setItem('upgradesAcquired', upgradesAcquired);
    localStorage.setItem("upgradeLevels", JSON.stringify(
        upgrade_itens.map(u => u.level)
    ));
}

//darkmode verification at the beggining
if (localStorage.getItem('dark_mode') === 'true') {
    document.body.classList.add('dark-mode');
    if(document.body.classList.contains("dark-mode")) {
        darkmode.src = images.darkmodeMoon;
    } else {
        darkmode.src = images.lightmodeSun;
    };
}

// Click function
show_points.textContent = click;

document.getElementById("clicker-button").addEventListener('click', function() {
    click += clickPower;
    show_points.textContent = click;
    
    saveGame();
});

//timer auto click
setInterval(() => {
    if (autoClickPower > 0) {
        click += autoClickPower;
        show_points.textContent = click;
        saveGame();
    }
}, 1000);

//ShowContent
show_points.textContent = click;
baseValue.textContent = clickPower;
autoClickText.textContent = autoClickPower;
upgradesAcquiredText.textContent = upgradesAcquired;

//darkmode function
darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if(document.body.classList.contains("dark-mode")) {
        darkmode.src = images.darkmodeMoon
    } else {
        darkmode.src = images.lightmodeSun
    };

    localStorage.setItem(
        'dark_mode',
        document.body.classList.contains('dark-mode')
    );
});

//reset function
reset.addEventListener('click', function() {
    resetMenu.classList.add("open");
    overlay.classList.add("active");
});


resetYes.addEventListener('click', () => {
    localStorage.removeItem("click_number");
    localStorage.removeItem("clickPower");
    localStorage.removeItem("autoClickPower");
    localStorage.removeItem("upgradesAcquired");
    localStorage.removeItem("upgradeLevels");
    localStorage.removeItem("upgrades");

    window.location.reload();
});

resetNo.addEventListener('click', () => {
    resetMenu.classList.remove("open");
    overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
    resetMenu.classList.remove("open");
    overlay.classList.remove("active");
});
    

//calculate price function
function getPrice(upgrade) {
    return Math.floor((upgrade.basePrice ?? 0) * Math.pow(2, upgrade.level ?? 0));
}

//upgrade list component function
function renderUpgrade() {  
    list.innerHTML = upgrade_itens.map(upgrade => {

        const isRepeatable =
            upgrade.maxLevel > 1 || upgrade.maxLevel === Infinity;

        return `
            <li id="${upgrade.id}" class="upgrade-item">
                <img class="upgrade-img" src="${upgrade.img}" alt="">

                <h3>
                    ${upgrade.title}
                    ${isRepeatable ? `Lv. ${upgrade.level + 1}` : ""}
                </h3>

                <p>${upgrade.text}</p>

                <p class="price">
                    ${getPrice(upgrade)}
                    <img src="${images.leeks}" alt="">
                </p>
            </li>
        `;
    }).join("");
}

//load upgrade level
const levels = JSON.parse(localStorage.getItem("upgradeLevels"));

const saved = localStorage.getItem("upgradeLevels");

if (saved) {
    const levels = JSON.parse(saved);

    upgrade_itens.forEach((u, i) => {
        u.level = levels[i] || 0;
    });
} else {
    upgrade_itens.forEach(u => u.level = 0);
}

//trigger list function
renderUpgrade();



//open upgrade function
upgradeButton.addEventListener("click", () => {
    upgrade.classList.toggle("open");
});

//open settings function
settingsButton.addEventListener("click", () => {
    settings.classList.toggle("open");
});

//upgrades
list.addEventListener("click", function (e) {
    const item = e.target.closest(".upgrade-item");
    if (!item) return;

    const upgrade = upgrade_itens.find(u => u.id === item.id);
    if (!upgrade) return;

    const price = getPrice(upgrade);

    if (click < price) return;

    click -= price;

    if (upgrade.type === "clickPower") {
        clickPower += upgrade.value;
        upgradesAcquired++
        
    }

    if (upgrade.type === "autoClick") {
        autoClickPower += upgrade.value;
        upgradesAcquired++
    }

    upgrade.level++;

    show_points.textContent = click;
    baseValue.textContent = clickPower;
    autoClickText.textContent = autoClickPower;
    upgradesAcquiredText.textContent = upgradesAcquired;

    renderUpgrade();
    

    saveGame();
});
