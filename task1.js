let input1 = document.querySelectorAll('input')[0]
let input2 = document.querySelectorAll('input')[1]
let button = document.querySelector('button')


//function to convert minutes to seconds

function minutesToSeconds() {
    input2.value = input1.value * 60 
}

button.addEventListener('click', minutesToSeconds)


