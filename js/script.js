// =========================================
// STELLANTIS CAROUSELS
// =========================================

const slides = {

    planner: [
        "images/final1.png",
        "images/final2.png",
        "images/final3.png",
        "images/final4.png",
        "images/final5.png",
        "images/final6.png",
        "images/final7.png",
        "images/final8.png",
        "images/final9.png",
        "images/final10.png",
        "images/final11.png",
        "images/final12.png",
        "images/final13.png"
    ],

    popup: [
        "images/final14.png",
        "images/final15.png",
        "images/final16.png",
        "images/final17.png",
        "images/final18.png",
        "images/final19.png",
        "images/final20.png",
        "images/final21.png"
    ],

    battery: [
        "images/final22.png",
        "images/final23.png",
        "images/final24.png"
    ],

    driver: [
        "images/driver1.png",
        "images/driver2.png",
        "images/driver3.png"
    ],

    map: [
        "images/map1.png",
        "images/map2.png",
        "images/map3.png",
        "images/map4.png"
    ]

};


const currentSlide = {
    planner: 0,
    popup: 0,
    battery: 0,
    driver: 0,
    map: 0
};


function changeSlide(type, direction) {

    const image = document.getElementById(type + "-image");
    const counter = document.getElementById(type + "-counter");

    // Stop if this carousel isn't on the current page
    if (!image || !counter) {
        return;
    }

    currentSlide[type] += direction;

    if (currentSlide[type] < 0) {
        currentSlide[type] = slides[type].length - 1;
    }

    if (currentSlide[type] >= slides[type].length) {
        currentSlide[type] = 0;
    }

    image.src = slides[type][currentSlide[type]];

    counter.textContent =
        String(currentSlide[type] + 1).padStart(2, "0")
        + " / "
        + String(slides[type].length).padStart(2, "0");
}


// =========================================
// INITIALIZE CAROUSELS
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    Object.keys(slides).forEach(function (type) {

        const image = document.getElementById(type + "-image");
        const counter = document.getElementById(type + "-counter");

        if (image && counter) {

            image.src = slides[type][0];

            counter.textContent =
                "01 / "
                + String(slides[type].length).padStart(2, "0");

        }

    });


    // =========================================
    // HOMEPAGE PROJECTS
    // =========================================

    const projects = document.querySelectorAll(".portfolio-project");

    projects.forEach(function (project) {
        project.classList.add("show");
    });

});