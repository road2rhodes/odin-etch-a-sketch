// Defintions

const WRAPPER = document.getElementById('wrap'); 

// Functions

///// Must replace existing squares with the specified

function canvasSelector (inputNumber) {

  for (i = 1; i <= inputNumber; i++) {

    div = document.createElement('div')
    div.classList.add('pixel',`pixel-${i}`);
    div.style =  `width: calc(100% / ${inputNumber});`;

    WRAPPER.appendChild(div);
  }

}

canvasSelector(10);