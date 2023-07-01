
/// Definitions
// sketchpad is container div for all generated pixels
// sliderValue refers to the input slider
// resetBtn refers to the reset button

// Draw canvas

canvasSetup(sliderValue.value);
sliderValue.addEventListener("change", canvasSetup);

function canvasSetup (inputNumber) {

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    sketchpad.appendChild(div);
    
  }

  // Creates grid with pixels generated

  sketchpad.style.cssText=`grid-template-columns: repeat(${inputNumber}, 1fr);
  grid-template-rows: repeat(${inputNumber}, 1fr)`;

}

const PIXELS = document.querySelectorAll('.pixel'); console.log(PIXELS);
PIXELS.forEach(pixel => pixel.addEventListener("mouseover", activatePixel)); 

function activatePixel() {
  this.style.backgroundColor="var(--black)"
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
  PIXELS.forEach( pixel => pixel.style.backgroundColor="var(--etch-screen-color)");
}

console.log(divsCreated);
