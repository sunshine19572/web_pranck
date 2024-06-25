document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('main-image');
    const hoverImage = document.getElementById('hover-image');
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const result = document.getElementById('result');
    const contactButton = document.getElementById('contact-button');

    function moveButton(event) {
        // Вычисляем максимальные координаты для кнопки внутри видимой области окна
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;
    
        // Генерируем случайные координаты в пределах maxX и maxY
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;
    
        // Устанавливаем новые координаты
        noButton.style.left = newX + 'px';
        noButton.style.top = newY + 'px';
    }
    
    noButton.addEventListener('mouseover', moveButton);

    mainImage.addEventListener('mouseover', function() {
        mainImage.style.display = 'none';
        hoverImage.style.display = 'block';
    });

    hoverImage.addEventListener('mouseout', function() {
        hoverImage.style.display = 'none';
        mainImage.style.display = 'block';
    });

    yesButton.addEventListener('click', function() {
        result.style.display = 'block';
    });

    
    contactButton.addEventListener('click', function() {
        window.location.href = 'https://wa.me/77772097948'; 
    });
});