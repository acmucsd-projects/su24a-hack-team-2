// Hover over button, text-emoji changes to corresponding buttons
const button_1 = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const dropdown_area = document.querySelector("#dropdown_area");
const emoji_text1 = document.querySelector("#emoji_1");
const emoji_text2 = document.querySelector("#emoji_2");

// Bouncing animation for Go Go Grocery Logo
const logo = document.querySelector(".bouncing-logo");
const container = document.querySelector("#user-details-emoji");

// Initializing position and velocity
let posX = 0;
let posY = 0;
let velocityX = 2;
let velocityY = 2;

function drift() {
  posX += velocityX;
  posY += velocityY;
  if (posX + logo.clientWidth > container.clientWidth || posX < 0) {
    velocityX = -velocityX;
  }
  if (posY + logo.clientHeight > container.clientHeight || posY < 0) {
    velocityY = -velocityY;
  }
  logo.style.left = `${posX}px`;
  logo.style.top = `${posY}px`;
  requestAnimationFrame(drift);
}

document.getElementById('button_2').addEventListener('click', function() {
  var itemList = document.getElementById('existing_grocery_list');

  if (itemList.style.display === "none") {
      itemList.style.display = "block";  // Show the list
  } else {
      itemList.style.display = "none";  // Hide the list
  }
});

drift();

button_1.addEventListener(
  "mouseover",
  () => {
    emoji_text1.textContent = "🗒️✍️";
    emoji_text1.classList.remove("fade-out");
  },
  1000
);

button_1.addEventListener(
  "mouseout",
  () => {
    emoji_text1.textContent = "&nbsp;";
    emoji_text1.classList.add("fade-out");
  },
  1000
);


