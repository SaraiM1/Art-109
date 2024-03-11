
let img0 = document.querySelector("#image-01");
let img1 = document.querySelector("#image-02");
let img2 = document.querySelector("#image-03");
let img3 = document.querySelector("#image-04");
let img4 = document.querySelector("#image-05");
let img5 = document.querySelector("#image-06");
let img6 = document.querySelector("#image-07");
let img7 = document.querySelector("#image-08");
let img8 = document.querySelector("#image-09");


img0.addEventListener('click', () => {
    img4.style.visibility = "visible";
});


img4.addEventListener('click', () => {
    img8.style.visibility = "visible";
});


img8.addEventListener('click', () => {
    img2.style.visibility = "visible";
});

img2.addEventListener('click', () => {
    img6.style.visibility = "visible";
});

img6.addEventListener('click', () => {
    img1.style.visibility = "visible";
});

img1.addEventListener('click', () => {
    img3.style.visibility = "visible";
});

img3.addEventListener('click', () => {
    img7.style.visibility = "visible";
});

img7.addEventListener('click', () => {
    img5.style.visibility = "visible";
});

