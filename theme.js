document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        this.innerText = '🌞';
    } else {
        this.innerText = '🌙';
    }
});