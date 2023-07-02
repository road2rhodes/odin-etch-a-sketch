
/// Definitions
// sketchpad is container div for all generated pixels
// sliderValue refers to the input slider
// resetBtn refers to the reset button

// Draw canvas

// gridMaker initialized first since canvasSetup calls on it.

sliderValueInput = sliderValue.value;

const gridMaker = (n) => {sketchpad.style.cssText=`grid-template-columns: repeat(${n}, 1fr); grid-template-rows: repeat(${n}, 1fr)`}; 

canvasSetup(sliderValueInput);
sliderValue.addEventListener("change", canvasSetup());



function canvasSetup (inputNumber) {

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    sketchpad.appendChild(div);
    
  }

  // Creates grid with pixels generated

}

gridMaker(sliderValueInput);

let PIXELS = document.querySelectorAll('.pixel');
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

  inputNumber = 15;

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    sketchpad.appendChild(div);
    
  }

  sketchpad.style.cssText=`grid-template-columns: repeat(${inputNumber}, 1fr);
  grid-template-rows: repeat(${inputNumber}, 1fr)`;

  PIXELS = document.querySelectorAll('.pixel');

}

// When input number changes, remove existing grid and then add grid

// Function to reset canvas

resetBtn.addEventListener("click", deActivatePixel); 

function deActivatePixel() {
  PIXELS.forEach( pixel => pixel.style.backgroundColor="var(--etch-screen-color)");
}

console.log(divsCreated);
