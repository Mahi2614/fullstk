document.addEventListener('DOMContentLoaded', () => {
  let randomNumber = 42 // Set to any number between 1 and 100 for testing
  // let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  let guessCount = 0

  const input = document.getElementById('input')
  const button = document.getElementById('btn')
  const wrongMessage = document.querySelector('.wrong')
  const guessesDisplay = document.getElementById('guesses')

  button.addEventListener('click', () => {
    ////o
    const userGuess = Number(input.value)
    guessCount++
    guessesDisplay.textContent = `No. of Guesses: ${guessCount}`

    if (userGuess === randomNumber) {
      wrongMessage.textContent = `Congratulations! You guessed it right! The number was ${randomNumber}.`
      wrongMessage.style.color = 'green'
      input.disabled = true
      button.disabled = true
    } else if (userGuess > randomNumber) {
      wrongMessage.textContent = 'Too high! Try again.'
    } else if (userGuess < randomNumber) {
      wrongMessage.textContent = 'Too low! Try again.'
    }

    input.value = ''
    input.focus()
  })
})
