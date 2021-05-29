console.log("Witoj cyberteyczny poszukiwaczu przygód!");

let przycisk = document.querySelector(".przycisk");
let przycisk2 = document.querySelector(".przycisk2");
let naglowek = document.querySelector(".naglowek");
let zdjecie = document.querySelector(".zdjecie");

zdjecie.classList.add("hidden");

przycisk.addEventListener("click", () => {
    naglowek.remove();
});

przycisk2.addEventListener("click", () => {
    zdjecie.classList.toggle("hidden");
});