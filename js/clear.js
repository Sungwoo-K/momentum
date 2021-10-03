const button = document.querySelector("#button button");

function deleteName() {
    localStorage.removeItem("username");
}

button.addEventListener("click", deleteName);