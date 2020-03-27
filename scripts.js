// add a window event listener/function that after the code is loaded then the code inside will run

window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound"); // create a variable that selects all the classes with name sound
  const pads = document.querySelectorAll(".pads div"); // create a varibale that selects all the classes within pads
  const visual = document.querySelector(".visual"); // creat a variable that selects class name with visual
  const colors = [
    // varible colors that stores json object of colors
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#d3d3d3",
    "#706161",
    "#d291bc"
  ];

  pads.forEach((pad, index) => {
    // .forEach pads we are passing in a pad and index looping through
    pad.addEventListener("click", function() {
      // a click event listener that takes the sounds index array
      sounds[index].currentTime = 0; // sets the current time to zero
      sounds[index].play(); // plays the sounds
      createBubbles(index);
    });
  });

  // create a function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div"); // creates a empty div and assigns it to bubble
    visual.appendChild(bubble); // appends that div to visual class
    bubble.style.backgroundColor = colors[index]; // sets the background of the div to colors index
    bubble.style.animation = "jump 1s ease"; // adds animation
    bubble.addEventListener("animationend", function() {
      // ends the animation and function to remove child bubble
      visual.removeChild(this);
    });
  };
});
