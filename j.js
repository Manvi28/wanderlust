const imageContainers = document.querySelectorAll('.image-container');
const tooltip = document.getElementById('image-info');

imageContainers.forEach(container => {
    container.addEventListener('mouseover', function() {
        const info = this.getAttribute('data-info');
        tooltip.textContent = info;
        tooltip.style.display = 'block';
        tooltip.style.top = `${this.getBoundingClientRect().top - tooltip.offsetHeight}px`;
        tooltip.style.left = `${this.getBoundingClientRect().left}px`;
    });

    container.addEventListener('mousemove', function(e) {
        tooltip.style.top = `${e.pageY - tooltip.offsetHeight - 10}px`; /* Adjusts the position as you move the mouse */
        tooltip.style.left = `${e.pageX}px`;
    });

    container.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
});