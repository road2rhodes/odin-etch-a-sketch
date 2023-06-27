// Defintions

const WRAPPER = document.getElementById('sketchpad'); 

// Functions

///// Must replace existing squares with the specified

function canvasSetup (inputNumber) {

  for (i = 1; i <= inputNumber**2; i++) {

    div = document.createElement('div');
    div.classList.add('pixel',`pixel-${i}`);
    WRAPPER.appendChild(div);
    
  }

  WRAPPER.style.cssText=`grid-template-columns: repeat(${inputNumber}, 1fr);
  grid-template-rows: repeat(${inputNumber}, 1fr)`;

}

function activatePixel() {
  this.style.backgroundColor="var(--black)"
}

function deActivatePixel() {
  PIXELS.forEach( pixel => pixel.style.backgroundColor="var(--etch-screen-color)");
}

canvasSetup(sliderValue.value);
sliderValue.addEventListener("change", canvasSetup);

// Post Canvas Creation

const PIXELS = document.querySelectorAll('.pixel'); console.log(PIXELS);
PIXELS.forEach(pixel => pixel.addEventListener("mouseover", activatePixel)); 

resetBtn.addEventListener("click", deActivatePixel); 