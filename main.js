document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("_header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-header").innerHTML = data;
        });

    // Load footer
    fetch("_footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-footer").innerHTML = data;
        });
});