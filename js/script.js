//save function
function saveGame() {
    localStorage.setItem('click_number', click);
    localStorage.setItem('clickPower', clickPower);
    localStorage.setItem('autoClickPower', autoClickPower);
    localStorage.setItem('upgradesAcquired', upgradesAcquired);
    localStorage.setItem("upgradeLevels", JSON.stringify(
        upgrade_itens.map(u => u.level)));
    localStorage.setItem("criticalChance", criticalChance);
    localStorage.setItem("criticalMultiplier", criticalMultiplier);
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

//ShowContent function
function updateUI() {
    show_points.textContent = click;
    baseValue.textContent = clickPower;
    autoClickText.textContent = autoClickPower;
    upgradesAcquiredText.textContent = upgradesAcquired;

    renderUpgrade();
    saveGame()
}

updateUI();

//click float text function
function createFloatingText(value, x, y) {
    const text = document.createElement("div");

    text.classList.add("floating-text");
    text.textContent = `+${value}`;

    text.style.left = `${x}px`;
    text.style.top = `${y}px`;

    document.body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 1000);
}

// Click function
clickButton.addEventListener("click", (e) => {
    let earned = clickPower;
    let critical = false;

    if (
        criticalChance > 0 &&
        Math.random() < criticalChance
    ) {
        earned *= criticalMultiplier;
        critical = true;
    }

    click += earned;

    createFloatingText(
        earned,
        e.pageX,
        e.pageY,
        critical
    );

    updateUI();
});

//click animation
clickButton.addEventListener('click', () => {
    clickButton.classList.add("clicked");

    setTimeout(() => {
        clickButton.classList.remove("clicked");
    }, 100)
})

//timer auto click
setInterval(() => {
    if (autoClickPower > 0) {
        click += autoClickPower;
        updateUI();
    }
}, 1000);



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
reset.addEventListener('click', () => {
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
    localStorage.removeItem("criticalChance");
    localStorage.removeItem("criticalMultiplier");

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

    if (upgrade.maxLevel === 1) {
        return upgrade.basePrice;
    }

    return Math.floor((upgrade.basePrice ?? 0) * Math.pow(1.5, upgrade.level ?? 0));
}

//upgrade list component function
function renderUpgrade() {  
    list.innerHTML = upgrade_itens
    .filter(upgrade => click >= (upgrade.unlock ?? 0))
    .map(upgrade => {

        const isRepeatable =
            upgrade.maxLevel > 1 ;
        
        const isPurchasable = click >= getPrice(upgrade);
        const isMaxed = upgrade.level >= upgrade.maxLevel;

        return `
            <li id="${upgrade.id}" class="upgrade-item ${isMaxed ? 'maxed' : ''} ${isPurchasable && !isMaxed ? 'buy' : ''}">
                <img class="upgrade-img" src="${upgrade.img}" alt="">

                <h3>
                    ${upgrade.title}
                    ${isRepeatable ? `Lv. ${upgrade.level}` : ""}
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
};


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


    if (upgrade.level >= upgrade.maxLevel)
        
        return;   

    const price = getPrice(upgrade);

    if (click < price) return;

    click -= price;

    if (upgrade.type === "clickPower") {
        clickPower += upgrade.value;
    }

    if (upgrade.type === "autoClick") {
        autoClickPower += upgrade.value;
    }

    if (upgrade.type === "criticalClick") {
        criticalChance = 0.10;
        criticalMultiplier = 5;
    }

    upgradesAcquired++;
    upgrade.level++;

    
    updateUI();
});
