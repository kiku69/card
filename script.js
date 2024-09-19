const box = document.getElementById('rotateBox');
let isRotated = false;

box.addEventListener('click', () => {
    if (isRotated) {
        box.style.transform = 'rotate(0deg)';
    } else {
        box.style.transform = 'rotate(360deg)';
    }
    isRotated = !isRotated;
});