let playlist = JSON.parse(localStorage.getItem("playlist"));
let index = parseInt(localStorage.getItem("songIndex"));
let current = playlist[index];

function loadSong(song) {
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;
  document.getElementById("song-image").src = song.image;
  document.getElementById("bg-image").style.backgroundImage = `url(${song.image})`;
  document.getElementById("audio").src = song.audio;
  document.getElementById("playPause").textContent = "▶";
  document.getElementById("footerPlayPause").textContent = "▶";
}

loadSong(current);

const audio = document.getElementById("audio");
const playBtn = document.getElementById("playPause");
const footerBtn = document.getElementById("footerPlayPause");
const progress = document.getElementById("progress");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
    footerBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
    footerBtn.textContent = "▶";
  }
}

playBtn.addEventListener("click", togglePlay);
footerBtn.addEventListener("click", togglePlay);

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % playlist.length;
  localStorage.setItem("songIndex", index);
  current = playlist[index];
  loadSong(current);
  audio.play();
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + playlist.length) % playlist.length;
  localStorage.setItem("songIndex", index);
  current = playlist[index];
  loadSong(current);
  audio.play();
});
