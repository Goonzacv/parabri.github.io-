"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "VAMOOOO💞";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Tas segura?",
    "muy muy???",
    "en serio?...",
    "Ultima oportunidad..",
    "ya en serio...?"
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(imageIndex) {
    if (imageIndex === "yes") {
      catImg.src = "cat-yes.jpg";
    } else {
      let imageNumber;
      if (noCount === 0) {
        imageNumber = 0;
      } else {
        imageNumber = (imageIndex - 1) % MAX_IMAGES;
      }
      catImg.src = `cat-${imageNumber}.jpg`;
    }
  }
  
  

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}


  