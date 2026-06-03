if (localStorage.getItem('dark_mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Click function
show_points.textContent = click

document.getElementById("clicker-button").addEventListener('click', function() {
    click++;
    show_points.textContent = click;
    
    localStorage.setItem('click_number', click);
});

darkmode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

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
        <li class="upgrade-item" role="button">
        <img class="upgrade-img" src="${upgrade_itens.img}" alt="">
        <h3>${upgrade_itens.title}</h3>
        <p>${upgrade_itens.text}</p>
        <p class="price"> ${upgrade_itens.price} <img src="${images.leeks}" alt=""> </p>
        </li>
  `).join("");

//open upgrade section button function
upgradeButton.addEventListener("click", () => {
    upgrade.classList.toggle("open");
});


settingsButton.addEventListener("click", () => {
    settings.classList.toggle("open");
});

