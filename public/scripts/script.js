const loginForm = document.querySelector('.form-login'),
      backdropOne = document.querySelector('.one'),
      backdropTwo = document.querySelector('.two'),
      backdropThree = document.querySelector('.three'),
      backdropFour = document.querySelector('.four'),
      backdropFive = document.querySelector('.five')

loginForm.addEventListener('submit', slideBackdrop)

function slideBackdrop () {
    backdropOne.classList.add('slide-up')
    backdropThree.classList.add('slide-up')
    backdropFive.classList.add('slide-up')

    backdropTwo.classList.add('slide-down')
    backdropFour.classList.add('slide-down')
}