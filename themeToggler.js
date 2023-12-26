function toggleTheme() {
    var lightStylesheet = document.getElementById("lightStylesheet");
    var darkStylesheet = document.getElementById("darkStylesheet");
    var themeButton = document.getElementById("themeButton");
    var githubButton = document.getElementById("githubButton");
    var linkedinButton = document.getElementById("linkedinButton");
    var emailButton = document.getElementById("emailButton");

    if (lightStylesheet.disabled) {
        lightStylesheet.disabled = false;
        darkStylesheet.disabled = true;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-light.png" alt="Github Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-light.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/contact-buttons/email-light.png" alt="Email Logo">';
    } else {
        lightStylesheet.disabled = true;
        darkStylesheet.disabled = false;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Dark Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-dark.png" alt="GitHub Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-dark.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/contact-buttons/email-dark.png" alt="Email Logo">';
    }

    localStorage.setItem("theme", lightStylesheet.disabled ? "dark" : "light");
}

document.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.getElementById("lightStylesheet").disabled = false;
        document.getElementById("darkStylesheet").disabled = true;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-light.png" alt="Github Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-light.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/contact-buttons/email-light.png" alt="Email Logo">';
    } else {
        document.getElementById("lightStylesheet").disabled = true;
        document.getElementById("darkStylesheet").disabled = false;
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-dark.png" alt="GitHub Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-dark.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/contact-buttons/email-dark.png" alt="Email Logo">';
    }
});
