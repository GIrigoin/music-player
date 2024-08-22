const tracks = [
  {
    name: "Lost in the City Lights",
    author: "Cosmo Sheldrake",
    url: "https://res.cloudinary.com/dyt4p8agq/video/upload/v1724272509/kj7zpnrpkjfyrnvjedhi.mp3",
    image: "../images/cover-1.png",
  },
  {
    name: "Forest Lullaby",
    author: "Lesfm",
    url: "https://res.cloudinary.com/dyt4p8agq/video/upload/v1724272510/inmcwbjixnkx0arebpjr.mp3",
    image: "../images/cover-2.png",
  },
];

let currentTrack = 0;
const player = new Audio("");

const setPlayer = (trackNumber) => {
  player.src = tracks[trackNumber].url;
  const songName = document.getElementsByClassName("song")[0];
  songName.innerText = tracks[trackNumber].name;
  const songAuthor = document.getElementsByClassName("author")[0];
  songAuthor.innerText = tracks[trackNumber].author;
  const image = document.getElementsByClassName("cover")[0];
  image.src = tracks[trackNumber].image;
  const currentTime = document.getElementById("current-time");
  currentTime.innerText = "00:00";
  const progress = document.getElementById("progress");
  progress.min = 0;
  progress.value = 0;
};

player.addEventListener("durationchange", (event) => {
  const totalTime = document.getElementById("total-time");
  let mins = Math.floor(player.duration / 60);
  let secs = Math.floor(player.duration % 60);
  if (secs < 10) secs = `0${secs}`;
  if (mins < 10) mins = `0${mins}`;
  totalTime.innerText = `${mins}:${secs}`;
  const progress = document.getElementById("progress");
  progress.max = Math.floor(player.duration);
});

player.addEventListener("timeupdate", () => {
  const progress = document.getElementById("progress");
  progress.value = Math.floor(player.currentTime);
  let mins = Math.floor(player.currentTime / 60);
  let secs = Math.floor(player.currentTime % 60);
  if (mins < 10) mins = `0${mins}`;
  if (secs < 10) secs = `0${secs}`;
  const currentTime = document.getElementById("current-time");
  currentTime.innerText = `${mins}:${secs}`;
});
setPlayer(currentTrack);

const playBtn = document.getElementById("play");
playBtn.addEventListener("click", () => {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
});

const progresBar = document.getElementById("progress");
progresBar.addEventListener("input", () => {
  player.currentTime = progresBar.value;
});
