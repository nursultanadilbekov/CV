const avatars = document.querySelectorAll('.profile img');

avatars.forEach(avatar => {
    avatar.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    avatar.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
document.addEventListener('mousemove', function(event) {
    const bioText = document.querySelector('.name');
    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;
    const greenToBlueRatio = x;
    const red = 0;
    const green = Math.floor((1 - greenToBlueRatio) * 255);
    const blue = Math.floor(greenToBlueRatio * 255);

    bioText.style.color = `rgb(${red}, ${green}, ${blue})`;
});
