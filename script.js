// script.js
const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");
const letter = document.getElementById("letter");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const backButton = document.getElementById("backButton");
const heart_container = document.querySelector(".heart_container");
const audio = document.getElementById("audio");
const scaryAudio = document.getElementById("scary-audio");
const danceAudio = document.getElementById("dance-audio");

if (scaryAudio) {
  scaryAudio.play().catch((error) => {
    console.log("Scary audio play failed:", error);
  });
}

if (danceAudio) {
  danceAudio.play().catch((error) => {
    console.log("Dance audio play failed:", error);
  });
}

if (envelope) {
  envelope.addEventListener("click", () => {
    envelope.classList.toggle("open");
    letter.classList.toggle("open");
    heart_container.classList.toggle("active");

    if (audio) {
      audio.play().catch((error) => {
        console.log("Audio play failed:", error);
      });
    }
    if (scaryAudio) {
      scaryAudio.pause();
      scaryAudio.currentTime = 0;
    }
    if (danceAudio) {
      danceAudio.pause();
      danceAudio.currentTime = 0;
    }
  });
}

if (yesButton) {
  yesButton.addEventListener("click", () => {
    window.location.href = "yessssss.html";
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (scaryAudio) {
      scaryAudio.pause();
      scaryAudio.currentTime = 0;
    }
    if (danceAudio) {
      danceAudio.pause();
      danceAudio.currentTime = 0;
    }
  });
}

if (noButton) {
  noButton.addEventListener("click", () => {
    window.location.href = "no.html";
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (scaryAudio) {
      scaryAudio.pause();
      scaryAudio.currentTime = 0;
    }
    if (danceAudio) {
      danceAudio.pause();
      danceAudio.currentTime = 0;
    }
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.href = "index.html";
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (scaryAudio) {
      scaryAudio.pause();
      scaryAudio.currentTime = 0;
    }
    if (danceAudio) {
      danceAudio.pause();
      danceAudio.currentTime = 0;
    }
  });
}

if (heart_container) {
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.querySelector(".heart_container").appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    });
  }

  setInterval(createHeart, 50);
}
