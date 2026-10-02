const musica = document.getElementById("musica");
const btnPlayer = document.getElementById("btnPlayer");

btnPlayer.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnPlayer.classList.replace("fa-circle-play", "fa-circle-pause");
    } else {
        musica.pause();
        btnPlayer.classList.replace("fa-circle-pause", "fa-circle-play");
    }
});