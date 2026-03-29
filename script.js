const btn = document.getElementById("musicBtn");
const music = document.getElementById("music");

let playing = false;

btn.addEventListener("click", () => {
    if (!playing) {
        music.play();
        btn.textContent = "Pausar música 🎶";
        playing = true;
    } else {
        music.pause();
        btn.textContent = "Tocar música 🎶";
        playing = false;
    }
});
