
const galleryImages = document.querySelectorAll('.gallery img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const closePopup = document.getElementById('closePopup');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        popupImage.src = image.src;
        popup.style.display = 'flex';
    });
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

