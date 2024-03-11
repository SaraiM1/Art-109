document.querySelector("#image-0").addEventListener("click", function () {
    document.querySelector("#image-1").style.visibility = "visible";
    alert("click more images!");
})

document.querySelector("#image-1").addEventListener("click", function () {
    document.querySelector("#image-2").style.visibility = "visible";
})

document.querySelector("#image-2").addEventListener("click", function () {
    document.querySelector("#image-3").style.visibility = "visible";
})

document.querySelector("#image-3").addEventListener("click", function () {
    document.querySelector("#image-4").style.visibility = "visible";
})

document.querySelector("#image-4").addEventListener("click", function () {
    document.querySelector("#image-5").style.visibility = "visible";
})

document.querySelector("#image-5").addEventListener("click", function () {
})