//MARK: 1e interactie

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


//MARK: 2e interactie

// Stap 1: querySelector
let interactionSecond = document.querySelector('a:nth-of-type(1)')

// Stap 2: addEventListener
interactionSecond.addEventListener('click', shakeIt)

// Stap 3: (Callback functie met) classList (.toggle(), .add(), etc.)
function shakeIt () {
  interactionSecond.classList.toggle('shake')
}

//MARK: 3e interactie
let interactionThird = document.querySelector('a:nth-of-type(2)')

interactionThird.addEventListener('mouseover', translateY)

function translateY () {
  interactionThird.classList.toggle('up')
}

//MARK: 4e interacietie
let interactionFourth = document.querySelector('a:nth-of-type(3)')

interactionFourth.addEventListener('hover', BorderR)

function BorderR () {
  interactionFourth.classList.toggle('round')
}