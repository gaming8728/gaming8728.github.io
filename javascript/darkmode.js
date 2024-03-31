// darkmode
window.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body")
    const darkModeBtn = document.getElementById("darkModeBtn")
    darkModeBtn.addEventListener("click", function() {
        if (body.classList.contains("darkmode")) {
            body.classList.remove("darkmode")
        } else {
            body.classList.add("darkmode")
        }
    })
})