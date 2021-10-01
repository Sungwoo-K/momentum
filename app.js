const title = document.querySelector("h1");

function changeColor() {
    title.classList.toggle("Clicked");
}

title.addEventListener("click", changeColor);