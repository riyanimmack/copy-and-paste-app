let copy = document.querySelector(".text1")

content = "";

document.querySelector(".copy").addEventListener("click", () => {
    content = copy.value;
    copy.value = "";
})

let pressPaste = document.querySelector(".paste");

pressPaste.addEventListener("click", () => {
    document.querySelector(".whitebg2").textContent = content; 
})