document.addEventListener("DOMContentLoaded", function() {
    // Recommendation: This client-side fetching approach should be replaced.
    // A framework like Next.js can build pages with the header and footer included at build time,
    // which is significantly better for performance (CLS, LCP) and SEO.

    // Load header
    fetch("partials/_header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("main-header").innerHTML = data;
            // After header is loaded, re-attach event listeners for mobile menu
            // This is a workaround for the current architecture but highlights its complexity.
            // A component-based framework handles this automatically.
            initializeHeaderScripts();
        });
});