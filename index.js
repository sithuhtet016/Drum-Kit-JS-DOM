$("button").on("click", handleClick);

$(document).keydown(function (e) {
  handleClick(e.key);
});

function handleClick(key) {
  switch (this.innerHTML || key) {
    case "w":
      $(".w").addClass("pressed");
      setTimeout(() => {
        $(".w").removeClass("pressed");
      }, 100);
      const tom1 = new Audio("./assets/sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      $(".a").addClass("pressed");
      setTimeout(() => {
        $(".a").removeClass("pressed");
      }, 100);
      const tom2 = new Audio("./assets/sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      $(".s").addClass("pressed");
      setTimeout(() => {
        $(".s").removeClass("pressed");
      }, 100);
      const tom3 = new Audio("./assets/sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      $(".d").addClass("pressed");
      setTimeout(() => {
        $(".d").removeClass("pressed");
      }, 100);
      const tom4 = new Audio("./assets/sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      $(".j").addClass("pressed");
      setTimeout(() => {
        $(".j").removeClass("pressed");
      }, 100);
      const snare = new Audio("./assets/sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      $(".k").addClass("pressed");
      setTimeout(() => {
        $(".k").removeClass("pressed");
      }, 100);
      const crash = new Audio("./assets/sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      $(".l").addClass("pressed");
      setTimeout(() => {
        $(".l").removeClass("pressed");
      }, 100);
      const kick = new Audio("./assets/sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      //   console.log(this.innerHTML);
      break;
  }
}
