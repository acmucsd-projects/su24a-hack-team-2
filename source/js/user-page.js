const button_1 = document.querySelector("#button_1");
const button_2 = document.querySelector("#button_2");
const emoji_text = document.querySelector("#emoji");

button_1.addEventListener("mouseover", () => {
  emoji_text.textContent = "🗒️✍️";
  emoji_text.classList.remove('fade-out')
},500);

button_1.addEventListener("mouseout", () => {
  emoji_text.textContent = "";
  emoji_text.classList.remove('fade-out')
},500);

button_2.addEventListener("mouseover", () => {
  emoji_text.textContent = "📋🧐💭";
  emoji_text.classList.remove('fade-out')
},500);

button_2.addEventListener("mouseout", () => {
  emoji_text.textContent = "";
  emoji_text.classList.remove('fade-out')
},500);

const button = document.querySelector(".button");
const textElement = document.querySelector(".text-element");

button.addEventListener("mouseover", () => {
  textElement.textContent = "Text Changed!";
});

button.addEventListener("mouseout", () => {
  textElement.textContent = "Original Text";
});
