let music = document.getElementById("music");
let playBtn = document.getElementById("playBtn");

let songs = ["music.mp3"];
let index = 0;
let playing = false;

music.src = songs[index];

function toggleMusic() {
    if (!playing) {
        music.play();
        playBtn.innerText = "⏸";
        playing = true;
    } else {
        music.pause();
        playBtn.innerText = "▶️";
        playing = false;
    }
}

function nextSong() {
    index = (index + 1) % songs.length;
    music.src = songs[index];
    music.play();
}

function prevSong() {
    index = (index - 1 + songs.length) % songs.length;
    music.src = songs[index];
    music.play();
}

/* SOBRE */
function openEnvelope() {
    let env = document.querySelector(".envelope");
    let paper = document.getElementById("paper");

    env.classList.add("open");

    setTimeout(() => {
        env.style.display = "none";
        paper.classList.remove("hidden");
        paper.classList.add("show");
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
