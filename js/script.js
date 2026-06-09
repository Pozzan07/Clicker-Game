//darkmode verification at the beggining
if (localStorage.getItem('dark_mode') === 'true') {
    document.body.classList.add('dark-mode');
    if(document.body.classList.contains("dark-mode")) {
        darkmode.src = images.darkmodeMoon;
    } else {
        darkmode.src = images.lightmodeSun;
    };
}

//timer
setInterval(() => {
    if (autoClickPower > 0) {
        click += autoClickPower;
        show_points.textContent = click;
        localStorage.setItem('click_number', click);
    }
}, 1000);

// Click function
show_points.textContent = click;

document.getElementById("clicker-button").addEventListener('click', function() {
    click += clickPower;
    show_points.textContent = click;
    
    localStorage.setItem('click_number', click);
});


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
    localStorage.removeItem('click_number');

    window.location.reload();
});

//upgrade list component  
list.innerHTML = upgrade_itens.map(upgrade_itens => `
        <li id="${upgrade_itens.id}" class="upgrade-item">
        <img class="upgrade-img" src="${upgrade_itens.img}" alt="">
        <h3>${upgrade_itens.title}</h3>
        <p>${upgrade_itens.text}</p>
        <p class="price"> ${upgrade_itens.price} <img src="${images.leeks}" alt=""> </p>
        </li>
  `).join("");

//open upgrade function
upgradeButton.addEventListener("click", () => {
    upgrade.classList.toggle("open");
});

//open settings function
settingsButton.addEventListener("click", () => {
    settings.classList.toggle("open");
});

//upgrade more clicks
list.addEventListener("click", function (e) {
    const item = e.target.closest(".upgrade-item");
    if (!item) return;

    const upgrade = upgrade_itens.find(u => u.id === item.id);
    if (!upgrade) return;

    if (click < upgrade.price) return;

    click -= upgrade.price;

    if (upgrade.type === "clickPower") {
        clickPower += upgrade.value;
    }

    if (upgrade.type === "autoClick") {
        autoClickPower += upgrade.value;
    }

    show_points.textContent = click;
    localStorage.setItem("click_number", click);
});
