let music = document.getElementById("music");
let btn = document.getElementById("musicBtn");
let playing = false;

function toggleMusic() {
    if (!playing) {
        music.play();
        btn.innerText = "Pausar música ⏸️";
        playing = true;
    } else {
        music.pause();
        btn.innerText = "Tocar música 🎵";
        playing = false;
    }
}

/* Corazones flotando */
setInterval(() => {
    let heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}, 500);
