let progress = document.getElementById("progress");
let song = document.getElementById("song");
let control = document.getElementById("ctrIcon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};
function playPause() {
  if (ctrIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrIcon.classList.remove("fa-pause");
    ctrIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrIcon.classList.add("fa-pause");
    ctrIcon.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}
progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
};

const songs = [
  {
    id:1,
    title: "Title1",
    Singer: "song1",
    img: "",
  },
  {
    id:2,
    title: "Title2",
    Singer: "song2",
    img: "",
  },
  {
    id:3,
    title: "Title3",
    Singer: "song3",
    img: "",
  },
  {
    id:4,
    title: "Title4",
    Singer: "song4",
    img: "",
  },
];
let pointer = 0;
document.getElementById("out").textContent = songs[pointer];
document.getElementById("nextBtn").addEventListener("click", function () {
  if (songs[pointer + 1] !== null && songs[pointer + 1] !== undefined) {
    pointer++;
    document.getElementById("out").textContent = songs[pointer];
  }
});

document.getElementById("prevBtn").addEventListener("click", function () {
  if (songs[pointer - 1] !== null && songs[pointer - 1] !== undefined) {
    pointer--;
    document.getElementById("out").textContent = songs[pointer];
  }
});
const songList = [];
