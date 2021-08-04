// Guardamos nuestro slider en una variable
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnPrev = document.querySelector("#slider__btnPrev");
const btnNext = document.querySelector("#slider__btnNext");


slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function NextSlider() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 1000);
}

function PrevSlider() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1]; slider.style.marginLeft = "0";
    slider.style.transition = "all 1s";
    setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 1000);
}

btnNext.addEventListener('click', function () {
    NextSlider();
});

btnPrev.addEventListener('click', function () {
    PrevSlider();
});

setInterval(() => {
    NextSlider();
}, 10000);