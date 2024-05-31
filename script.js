// Blinking text
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: ["Front-end Developer", "Designer", "3D-Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 2000,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true
    };

    var typed = new Typed("#typed-output", options);
});
// End of Blinking text