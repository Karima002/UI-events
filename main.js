
// Stap 1: selecteer het 12e linkje, en sla deze op in een variabele
let interaction = document.querySelector('a:nth-of-type(12)')

// Stap 2: voeg de (click) event listener toe aan de link, met een callback functie
// In dit geval wordt de jumpHandler functie aangeroepen, zodra je op het linkje klikt
interaction.addEventListener('click', jumpHandler)

// Deze jumpHandler functie staat klaar voor als we 'm aanroepen; deze wordt dus
// _niet_ meteen bij het laden van de pagina aangeroepen
function jumpHandler() {

  // Stap 3: toggle een class op het element (zodra er dus op een link wordt geklikt)
  interaction.classList.toggle('jump')
}

// Extraatje, waardoor de class weer weggehaald wordt zodra de animatie afgelopen is
interaction.addEventListener('animationend', jumpHandler)


//MARK: 1e interactie

// Stap 1: querySelector
let interactionFirst = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
interactionFirst.addEventListener('click', shakeIt)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function shakeIt () {
  interactionFirst.classList.toggle('shake')
}

//MARK: 2e interactie
let interactionSecond = document.querySelector('a:nth-of-type(2)')

interactionSecond.addEventListener('mouseover', translateY)

function translateY () {
  interactionSecond.classList.toggle('up')
}

//MARK: 3e interactie
let interactionThird = document.querySelector('a:nth-of-type(3)')

interactionThird.addEventListener('focusin', (event) => {
  event.target.style.background = 'orange';
});

//MARK: 4e interactie
let interactionFourth = document.querySelector('a:nth-of-type(4)')

interactionFourth.addEventListener('click', rotate)

function rotate () {
  interactionFourth.classList.toggle('rotating')
}

//MARK: 5e interactie
let interactionFifth = document.querySelector('a:nth-of-type(5)')

interactionFifth.addEventListener('keydown', transform)

function transform () {
  interactionFifth.classList.toggle('transform-orgin')
}

//MARK: 6e interactie

let interactionSix = document.querySelector('a:nth-of-type(6)')

interactionSix.addEventListener('mouseleave', scale)

function scale () {
interactionSix.classList.toggle('property-scales')

}