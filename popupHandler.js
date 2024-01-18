// Variables for Taekwondo image gallery
var currentTkdImage = 0;
var TkdImages = document.querySelectorAll("#tkd-gallery img");

// Function to open Taekwondo image popup
function openPopup() {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupContent").style.display = "block";
    showTkdSlide(currentTkdImage)
    document.body.classList.add('no-scroll');
}

// Function to close Taekwondo image popup
function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
    document.body.classList.remove('no-scroll');
}

// Function to show a specific Taekwondo image
function showTkdSlide(index) {
    TkdImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Function to show the previous Taekwondo image
function prevTkdImage() {
    currentTkdImage = (currentTkdImage - 1 + TkdImages.length) % TkdImages.length;
    showTkdSlide(currentTkdImage);
}

// Function to show the next Taekwondo image
function nextTkdImage() {
    currentTkdImage = (currentTkdImage + 1) % TkdImages.length;
    showTkdSlide(currentTkdImage);
}

// Variables for VenusHacks image gallery
var currentVHImage = 0;
var VHImages = document.querySelectorAll("#vh-gallery img");

// Function to open VenusHacks image popup
function openVHPopup() {
    document.getElementById("VHImagePopup").style.display = "flex";
    document.getElementById("VHPopupContent").style.display = "block";
    showVHSlide(currentVHImage)
    document.body.classList.add('no-scroll');
}

// Function to close VenusHacks image popup
function closeVHPopup() {
    document.getElementById("VHImagePopup").style.display = "none";
    document.getElementById("VHPopupContent").style.display = "none";
    document.body.classList.remove('no-scroll');

}

// Function to show a specific VenusHacks image
function showVHSlide(index) {
    VHImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Function to show the previous VenusHacks image
function prevVHImage() {
    currentVHImage = (currentVHImage - 1 + VHImages.length) % VHImages.length;
    showVHSlide(currentVHImage);
}

// Function to show the next VenusHacks image
function nextVHImage() {
    currentVHImage = (currentVHImage + 1) % VHImages.length;
    showVHSlide(currentVHImage);
}

// Variables for TM image gallery
var currentTMImage = 0;
var TMImages = document.querySelectorAll("#tm-gallery img");

// Function to open TM image popup
function openTMPopup() {
    document.getElementById("TMImagePopup").style.display = "flex";
    document.getElementById("TMPopupContent").style.display = "block";
    showTMSlide(currentTMImage)
    document.body.classList.add('no-scroll');
}

// Function to close TM image popup
function closeTMPopup() {
    document.getElementById("TMImagePopup").style.display = "none";
    document.getElementById("TMPopupContent").style.display = "none";
    document.body.classList.remove('no-scroll');
}

// Function to show a specific VenusHacks image
function showTMSlide(index) {
    TMImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

// Function to show the previous TM image
function prevTMImage() {
    currentTMImage = (currentTMImage - 1 + TMImages.length) % TMImages.length;
    showTMSlide(currentTMImage);
}

// Function to show the next TM image
function nextTMImage() {
    currentTMImage = (currentTMImage + 1) % TMImages.length;
    showTMSlide(currentTMImage);
}