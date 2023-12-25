function toggleTheme() {
    var lightStylesheet = document.getElementById("lightStylesheet");
    var darkStylesheet = document.getElementById("darkStylesheet");
    var themeButton = document.getElementById("themeButton");

    if (lightStylesheet.disabled) {
        lightStylesheet.disabled = false;
        darkStylesheet.disabled = true;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
    } else {
        lightStylesheet.disabled = true;
        darkStylesheet.disabled = false;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Dark Theme">';
    }

    localStorage.setItem("theme", lightStylesheet.disabled ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.getElementById("lightStylesheet").disabled = false;
        document.getElementById("darkStylesheet").disabled = true;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
    } else {
        document.getElementById("lightStylesheet").disabled = true;
        document.getElementById("darkStylesheet").disabled = false;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Light Theme">';
    }
});
