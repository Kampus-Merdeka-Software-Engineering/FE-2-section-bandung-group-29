// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Load header content using JavaScript
    fetch('/news-web/home/widget/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footerNews').innerHTML = data;
        });
});

