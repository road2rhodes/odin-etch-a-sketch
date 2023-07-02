
/// Definitions
// sketchpad is container div for all generated pixels
// sliderValue refers to the input slider
// resetBtn refers to the reset button

// Draw canvas

function canvasDivMaker (inputNumber) { // Creates the divs

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    sketchpad.appendChild(div);
    
  }

}

const canvasGridMaker = (n) => {sketchpad.style.cssText=`grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr)`}; 


let sliderNumberValue = sliderValue.value;

canvasDivMaker(sliderNumberValue);
sliderValue.addEventListener("change", canvasDivMaker());

canvasGridMaker(sliderNumberValue); // Gives grid styling to wrapper

// Capture grids and add event listener

let PIXELS = document.querySelectorAll('.pixel');
PIXELS.forEach(pixel => pixel.addEventListener("mouseover", activatePixel)); 

function activatePixel() {
  this.style.backgroundColor="var(--black)"
}

// Change canvas based on input

divsCreated = sketchpad.children.length; // gets current number of divs

function changeCanvas(sliderNumberValue) {

  for (i = 0; i < divsCreated; i++) {

    sketchpad.firstElementChild.remove();
    
  }

  canvasDivMaker(sliderNumberValue);
  canvasGridMaker(sliderNumberValue);

  PIXELS = document.querySelectorAll('.pixel');

}

// When input number changes, remove existing grid and then add grid

// Function to reset canvas

resetBtn.addEventListener("click", deActivatePixel); 

function deActivatePixel() {
  PIXELS.forEach( pixel => pixel.style.backgroundColor="var(--etch-screen-color)");
}

console.log(divsCreated);
