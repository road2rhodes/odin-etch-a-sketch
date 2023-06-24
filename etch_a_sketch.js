// Defintions

const WRAPPER = document.getElementById('wrap'); 

// Functions

///// Must replace existing squares with the specified

function canvasSelector (inputNumber) {

  for (i = 1; i <= inputNumber; i++) {

    div = document.createElement('div')
    div.classList.add('pixel',`pixel-${i}`);

    WRAPPER.appendChild(div);
  }

}

canvasSelector(256);