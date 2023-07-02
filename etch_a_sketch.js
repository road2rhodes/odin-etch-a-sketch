
/// Definitions
// sketchpad is container div for all generated pixels
// sliderValue refers to the input slider
// resetBtn refers to the reset button

// Draw canvas

function canvasDivMaker (inputNumber) { // Creates the divs

  sketchpad.innerHTML = ""; // clears canvas before regenerating.

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    sketchpad.appendChild(div);
    
  }

  // Part of function call to regenerate with new pixels
  let PIXELS = document.querySelectorAll('.pixel'); 
  PIXELS.forEach(pixel => pixel.addEventListener("mouseover", activatePixel)); 

}

const canvasGridMaker = (n) => {sketchpad.style.cssText=`grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr)`}; 

let pixels;

let slider = document.querySelector('#sliderValue');

canvasDivMaker(slider.value);

canvasGridMaker(slider.value); // Gives grid styling to wrapper

// Activate pixels

pixelColor = "var(--black)";

function activatePixel() {

  this.style.backgroundColor= pixelColor;
}

// Change canvas based on input

divsCreated = sketchpad.children.length; // gets current number of divs

function changeCanvas() {


  for (i = 0; i < divsCreated; i++) {

    sketchpad.firstElementChild.remove();
    
  }

}

// When input number changes, remove existing grid and then add grid

// Function to reset canvas

resetBtn.addEventListener("click", deActivatePixel); 

function deActivatePixel() {
  let PIXELS = document.querySelectorAll('.pixel'); 
  PIXELS.forEach( pixel => pixel.style.backgroundColor="var(--etch-screen-color)");
}

// Button Functionality

sliderValue.addEventListener('change',() => {canvasGridMaker(slider.value); canvasDivMaker(slider.value);});

rgbModeBtn.addEventListener('click',() => pixelColor = `rgb(${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)}, ${Math.floor(Math.random() * (255 - 0 + 1) + 0)})`);