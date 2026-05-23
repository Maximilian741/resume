// Max Casteel
// Small helpers for the resume site.

(function () {
    // Keep the footer copyright year current automatically.
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
