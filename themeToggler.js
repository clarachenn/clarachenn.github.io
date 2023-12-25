function toggleTheme() {
    var lightStylesheet = document.getElementById("lightStylesheet");
    var darkStylesheet = document.getElementById("darkStylesheet");
    var themeButton = document.getElementById("themeButton");

    if (lightStylesheet.disabled) {
        lightStylesheet.disabled = false;
        darkStylesheet.disabled = true;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/images/sun.png" alt="Light Theme">';
    } else {
        lightStylesheet.disabled = true;
        darkStylesheet.disabled = false;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/images/moon.png" alt="Dark Theme">';
    }
}
