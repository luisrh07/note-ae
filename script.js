let music = document.getElementById("music");
let playBtn = document.getElementById("playBtn");
let playing = false;

/* PLAY / PAUSE */
function toggleMusic() {
    if (!playing) {
        music.play();
        playBtn.innerText = "⏸ Pausar";
        playing = true;
    } else {
        music.pause();
        playBtn.innerText = "▶️ Reproducir";
        playing = false;
    }
}

/* SOBRE */
function openEnvelope() {
    let env = document.querySelector(".envelope");
    let paper = document.getElementById("paper");

    env.classList.add("open");

    setTimeout(() => {
        env.style.display = "none";
        paper.classList.remove("hidden");

        setTimeout(() => {
            paper.classList.add("show");
        }, 50);

    }, 700);
}

/* MODO */
function toggleMode() {
    document.body.classList.toggle("light");
}

/* ESTRELLAS */
setInterval(() => {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 6000);
}, 200);

/* GIRASOLES */
setInterval(() => {
    let sun = document.createElement("div");
    sun.classList.add("sunflower");
    sun.innerHTML = "🌻";
    sun.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(sun);
    setTimeout(() => sun.remove(), 8000);
}, 2000);
