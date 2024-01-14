var currentTkdImage = 0;
var TkdImages = document.querySelectorAll("#tkd-gallery img");

function openPopup() {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupContent").style.display = "block";
    showTkdSlide(currentTkdImage)
    document.body.classList.add('no-scroll');
}

function closePopup() {
    document.getElementById("imagePopup").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
    document.body.classList.remove('no-scroll');

}

function showTkdSlide(index) {
    TkdImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

function prevTkdImage() {
    currentTkdImage = (currentTkdImage - 1 + TkdImages.length) % TkdImages.length;
    showTkdSlide(currentTkdImage);
}

function nextTkdImage() {
    currentTkdImage = (currentTkdImage + 1) % TkdImages.length;
    showTkdSlide(currentTkdImage);
}

var currentVHImage = 0;
var VHImages = document.querySelectorAll("#vh-gallery img");

function openVHPopup() {
    document.getElementById("VHImagePopup").style.display = "flex";
    document.getElementById("VHPopupContent").style.display = "block";
    showVHSlide(currentVHImage)
    document.body.classList.add('no-scroll');
}

function closeVHPopup() {
    document.getElementById("VHImagePopup").style.display = "none";
    document.getElementById("VHPopupContent").style.display = "none";
    document.body.classList.remove('no-scroll');

}

function showVHSlide(index) {
    VHImages.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}

function prevVHImage() {
    currentVHImage = (currentVHImage - 1 + VHImages.length) % VHImages.length;
    showVHSlide(currentVHImage);
}

function nextVHImage() {
    currentVHImage = (currentVHImage + 1) % VHImages.length;
    showVHSlide(currentVHImage);
}