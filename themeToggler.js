// Function to toggle between light and dark themes
function toggleTheme() {
    // Retrieve elements by their IDs
    var lightStylesheet = document.getElementById("lightStylesheet");
    var darkStylesheet = document.getElementById("darkStylesheet");
    var themeButton = document.getElementById("themeButton");
    var githubButton = document.getElementById("githubButton");
    var linkedinButton = document.getElementById("linkedinButton");
    var emailButton = document.getElementById("emailButton");

    // Check the current theme and toggle accordingly
    if (lightStylesheet.disabled) {
        // Switch to light theme
        lightStylesheet.disabled = false;
        darkStylesheet.disabled = true;
        // Update theme button and contact buttons with light theme icons
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-light.png" alt="Github Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-light.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/email-light.png" alt="Email Logo">';
    } else {
        // Switch to dark theme
        lightStylesheet.disabled = true;
        darkStylesheet.disabled = false;
        // Update theme button and contact buttons with dark theme icons
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Dark Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-dark.png" alt="GitHub Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-dark.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/email-dark.png" alt="Email Logo">';
    }

     // Save the selected theme to local storage
    localStorage.setItem("theme", lightStylesheet.disabled ? "dark" : "light");
}

// Function to set the theme based on user's previous selection (on page load)
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the saved theme from local storage
    var savedTheme = localStorage.getItem("theme");
    
    // Check the saved theme and set the theme accordingly
    if (savedTheme === "dark") {
        document.getElementById("lightStylesheet").disabled = true;
        document.getElementById("darkStylesheet").disabled = false;
        // Update theme button and contact buttons with dark theme icons
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/moon.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-dark.png" alt="GitHub Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-dark.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/email-dark.png" alt="Email Logo">';
    } else {
        document.getElementById("lightStylesheet").disabled = false;
        document.getElementById("darkStylesheet").disabled = true;
        // Update theme button and contact buttons with light theme icons
        themeButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/themes/sun.png" alt="Light Theme">';
        githubButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/github-light.png" alt="Github Logo">';
        linkedinButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/linkedin-light.png" alt="LinkedIn Logo">';
        emailButton.innerHTML = '<img src="https://raw.githubusercontent.com/clarachenn/clarachenn.github.io/main/contact-buttons/email-light.png" alt="Email Logo">';
    }
});
