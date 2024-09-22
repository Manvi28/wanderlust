document.getElementById('coin').addEventListener('click', function() {
    const starsContainer = document.getElementById('stars');
    
    for (let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'px'; // Random x position
        star.style.top = Math.random() * 100 + 'px'; // Random y position
        starsContainer.appendChild(star);
        
        // Animate the star
        setTimeout(() => {
            star.style.opacity = '1';
            star.style.transform = translateY(-50 );
            star.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        }, i * 100); // Staggered animation
        
        // Remove the star after animation
        setTimeout(() => {
            starsContainer.removeChild(star);
        }, 2000); // Remove after 2 seconds
    }
});