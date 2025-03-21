document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
