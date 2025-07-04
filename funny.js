// Toggle Sidebar Menu
function toggleMenu() {
  const nav = document.getElementById("sidebarNav");
  nav.classList.toggle("open");
}

// Handle song play and redirect to player1.html
let currentAudio = null;

function playSong(card) {
  const audio = card.querySelector("audio");

  if (currentAudio && currentAudio !== audio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  if (audio.paused) {
    audio.play();
    currentAudio = audio;
  } else {
    audio.pause();
  }
}

// Setup click and store data for player1.html

document.querySelectorAll(".song-card").forEach((card, index) => {
  card.addEventListener("click", () => {
    const title = card.querySelector("h3").textContent;
    const artist = card.querySelector("p").textContent;
    const image = card.querySelector("img").src;
    const audio = card.querySelector("audio") ? card.querySelector("audio").src : card.dataset.audio;

    const currentSong = {
      title,
      artist,
      image,
      audio
    };

    // Save song list & index
    const allSongs = Array.from(document.querySelectorAll(".song-card")).map(c => {
      return {
        title: c.querySelector("h3").textContent,
        artist: c.querySelector("p").textContent,
        image: c.querySelector("img").src,
        audio: c.querySelector("audio") ? c.querySelector("audio").src : c.dataset.audio
      };
    });

    localStorage.setItem("currentSong", JSON.stringify(currentSong));
    localStorage.setItem("playlist", JSON.stringify(allSongs));
    localStorage.setItem("songIndex", index);
    localStorage.setItem("backPage", "Funny.html");

    document.body.classList.add("fade-out");
    setTimeout(() => {
      window.location.href = "player2.html";
    }, 300);
  });
});
