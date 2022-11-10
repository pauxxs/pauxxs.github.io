export default function music() {
  window.onload = function() {
    const music2 = new Audio("./res/192000 Instrumental Gorillaz.mp3");
    music2.loop = true;
    music2.volume = 0.1;
    music2.play();
  }
}
