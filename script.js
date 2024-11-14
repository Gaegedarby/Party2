function rsvp() {
  alert("Thanks for your RSVP!");
}
function toggleMusic() {
  const music = document.getElementById('background-music');
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
