'use strict';



/**
 * all music information
 */

const musicData = [
  {
    backgroundImage: "./assets/images/kolaveri.jpg",
    posterUrl: "./assets/images/kolaveri.jpg",
    title: "Why This Kolaveri Di",
    album: "Three",
    year: 2011,
    artist: "Dhanush, Anirudh Ravichander",
    musicPath: "./assets/music/Kolaveri.mp3",
  },
  {
    backgroundImage: "./assets/images/gangnam.jpg",
    posterUrl: "./assets/images/gangnam.jpg",
    title: "Gangnam Style",
    album: "Psy 6 (Six Rules), Part 1",
    year: 2012,
    artist: "PSY",
    musicPath: "./assets/music/Gangnam.mp3",
  },
  {
    backgroundImage: "./assets/images/amplifier.jpg",
    posterUrl: "./assets/images/amplifier.jpg",
    title: "Amplifier",
    album: "Unforgettable",
    year: 2008,
    artist: "Imran Khan",
    musicPath: "./assets/music/Amplifier.mp3",
  },
  {
    backgroundImage: "./assets/images/letmelove.jpg",
    posterUrl: "./assets/images/letmelove.jpg",
    title: "Let Me Love You",
    album: "Encore",
    year: 2016,
    artist: "Dj Snake, Justin Bieber",
    musicPath: "./assets/music/letmelove.mp3",
  },
  {
    backgroundImage: "./assets/images/aajki.jpg",
    posterUrl: "./assets/images/aajki.jpg",
    title: "Aaj Ki Raat",
    album: "Stree 2",
    year: 2024,
    artist: "Madhubanti Bagchi, Amitabh Bhattacharya, Divya Kumar, Sachin–Jigar",
    musicPath: "./assets/music/Aajkiraat.mp3",
  },
  {
    backgroundImage: "./assets/images/illuminati.jpg",
    posterUrl: "./assets/images/illuminati.jpg",
    title: "Illuminati",
    album: "Aavesham",
    year: 2024,
    artist: "Dabzee, Vinayak Sasikumar, Sushin Shyam",
    musicPath: "./assets/music/Illuminati.mp3",
  },
  {
    backgroundImage: "./assets/images/vett.jpg",
    posterUrl: "./assets/images/vett.jpg",
    title: "Manasilaayo",
    album: "Vettaiyan",
    year: 2024,
    artist: "Deepthi Suresh, Malaysia Vasudevan, Yugendran, Anirudh Ravichander",
    musicPath: "./assets/music/Vettaiyan.mp3",
  },
  {
    backgroundImage: "./assets/images/calmdown.jpg",
    posterUrl: "./assets/images/calmdown.jpg",
    title: "Calm Down",
    album: "Rave & Roses",
    year: 2022,
    artist: "Rema, Selena Gomez",
    musicPath: "./assets/music/calmdown.mp3",
  },
  {
    backgroundImage: "./assets/images/theethala.jpg",
    posterUrl: "./assets/images/theethala.jpg",
    title: "Thee Thalapathy",
    album: "Varisu",
    year: 2022,
    artist: "Silambarasan TR",
    musicPath: "./assets/music/Theethala.mp3",
  },
   {
    backgroundImage: "./assets/images/sunnysunny.jpg",
    posterUrl: "./assets/images/sunnysunny.jpg",
    title: "Sunny Sunny",
    album: "Yaarian",
    year: 2013,
    artist: "Yo Yo Honey Singh, Neha Kakkar",
    musicPath: "./assets/music/Sunny%20Sunny%20Yaariyan%20Lyric%20Video%20%20Ft.Yo%20Yo%20Honey%20Singh%20%20Divya%20Khosla%20Kumar%20Himansh%20K%2C%20Rakul%20P.mp3",
  },
  {
    backgroundImage: "./assets/images/jamalkudu.jpg",
    posterUrl: "./assets/images/jamalkudu.jpg",
    title: "Abrar’s Entry | Jamal Kudu",
    album: "Animal",
    year: 2023,
    artist: "Harshavardhan Rameshwar",
    musicPath: "./assets/music/ANIMAL Abrars Entry - Jamal Kudu (Lyrical Video) Bobby Deol Sandeep Vanga Bhushan Kumar.mp3",
  },
  {
    backgroundImage: "./assets/images/justin.jpg",
    posterUrl: "./assets/images/justin.jpg",
    title: "Baby ft. Ludacris",
    album: "My World 2.0",
    year: 2010,
    artist: " Justin Bieber, Ludacris",
    musicPath: "./assets/music/Justin Bieber - Baby ft. Ludacris.mp3",
  },
];



/**
 * add eventListnere on all elements that are passed
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PLAYLIST
 * 
 * add all music in playlist, from 'musicData'
 */

const playlist = document.querySelector("[data-music-list]");

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? "playing" : ""}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}



/**
 * PLAYLIST MODAL SIDEBAR TOGGLE
 * 
 * show 'playlist' modal sidebar when click on playlist button in top app bar
 * and hide when click on overlay or any playlist-item
 */

const playlistSideModal = document.querySelector("[data-playlist]");
const playlistTogglers = document.querySelectorAll("[data-playlist-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglePlaylist = function () {
  playlistSideModal.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("modalActive");
}

addEventOnElements(playlistTogglers, "click", togglePlaylist);



/**
 * PLAYLIST ITEM
 * 
 * remove active state from last time played music
 * and add active state in clicked music
 */

const playlistItems = document.querySelectorAll("[data-playlist-item]");

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove("playing");
  playlistItems[currentMusic].classList.add("playing");
}

addEventOnElements(playlistItems, "click", function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});



/**
 * PLAYER
 * 
 * change all visual information on player, based on current music
 */

const playerBanner = document.querySelector("[data-player-banner]");
const playerTitle = document.querySelector("[data-title]");
const playerAlbum = document.querySelector("[data-album]");
const playerYear = document.querySelector("[data-year]");
const playerArtist = document.querySelector("[data-artist]");

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute("alt", `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener("loadeddata", updateDuration);
  playMusic();
}

addEventOnElements(playlistItems, "click", changePlayerInfo);

/** update player duration */
const playerDuration = document.querySelector("[data-duration]");
const playerSeekRange = document.querySelector("[data-seek]");

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - (minutes * 60));
  const timecode = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  return timecode;
}

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
}

audioSource.addEventListener("loadeddata", updateDuration);



/**
 * PLAY MUSIC
 * 
 * play and pause music when click on play button
 */

const playBtn = document.querySelector("[data-play-btn]");

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add("active");
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove("active");
    clearInterval(playInterval);
  }
}

playBtn.addEventListener("click", playMusic);


/** update running time while playing music */

const playerRunningTime = document.querySelector("[data-running-time");

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
}



/**
 * RANGE FILL WIDTH
 * 
 * change 'rangeFill' width, while changing range value
 */

const ranges = document.querySelectorAll("[data-range]");
const rangeFill = document.querySelector("[data-range-fill]");

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
}

addEventOnElements(ranges, "input", updateRangeFill);



/**
 * SEEK MUSIC
 * 
 * seek music while changing player seek range
 */

const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
}

playerSeekRange.addEventListener("input", seek);



/**
 * END MUSIC
 */

const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove("active");
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
}



/**
 * SKIP TO NEXT MUSIC
 */

const playerSkipNextBtn = document.querySelector("[data-skip-next]");

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? currentMusic = 0 : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipNextBtn.addEventListener("click", skipNext);



/**
 * SKIP TO PREVIOUS MUSIC
 */

const playerSkipPrevBtn = document.querySelector("[data-skip-prev]");

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? currentMusic = musicData.length - 1 : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
}

playerSkipPrevBtn.addEventListener("click", skipPrev);



/**
 * SHUFFLE MUSIC
 */

/** get random number for shuffle */
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => currentMusic = getRandomMusic();

const playerShuffleBtn = document.querySelector("[data-shuffle]");
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle("active");

  isShuffled = isShuffled ? false : true;
}

playerShuffleBtn.addEventListener("click", shuffle);



/**
 * REPEAT MUSIC
 */

const playerRepeatBtn = document.querySelector("[data-repeat]");

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add("active");
  } else {
    audioSource.loop = false;
    this.classList.remove("active");
  }
}

playerRepeatBtn.addEventListener("click", repeat);



/**
 * MUSIC VOLUME
 * 
 * increase or decrease music volume when change the volume range
 */

const playerVolumeRange = document.querySelector("[data-volume]");
const playerVolumeBtn = document.querySelector("[data-volume-btn]");

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = "volume_mute";
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = "volume_down";
  } else {
    playerVolumeBtn.children[0].textContent = "volume_up";
  }
}

playerVolumeRange.addEventListener("input", changeVolume);


/**
 * MUTE MUSIC
 */

const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = "volume_off";
  } else {
    changeVolume();
  }
}

playerVolumeBtn.addEventListener("click", muteVolume);
