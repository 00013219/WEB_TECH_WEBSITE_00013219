document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("colorButton");
    var isDarkMode = false;

    button.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        updateBodyandNav();
        updateColors();
        updateTextColors();
    });

    function updateBodyandNav() {
        var elements = document.querySelectorAll('body, nav');

        elements.forEach(function (element) {
            if (isDarkMode) {
                element.style.backgroundColor = "#222222";
            } else {
                element.style.backgroundColor = "";
            }
        });
    }
    function updateColors() {
        var elements = document.querySelectorAll('.history, .latest-news-container');
        elements.forEach(function (element) {
            if (isDarkMode) {
                element.style.backgroundColor = "#2A2A2B";
            } else {
                element.style.backgroundColor = "";
            }
        });
    }
    function updateTextColors() {
        var elements = document.querySelectorAll('nav a, .history-text h2, .history-text p, .news-content p, .news-content h3, .award, .awards-header, .news-header');
        elements.forEach(function (element) {
            if (isDarkMode) {
                element.style.color = "#FFFFFF";
            } else {
                element.style.color = "";
            }
        });
    }
});

function changeText() {
    var button = document.getElementById("colorButton");

    if (button.innerHTML === "Darkmode") {
        button.innerHTML = "Lightmode";
    } else {
        button.innerHTML = "Darkmode";
    }
}