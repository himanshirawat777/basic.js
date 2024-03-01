const form = document.querySelector('form')
const fruit = document.querySelectorAll('.fruit')
const fruits = document.querySelector('.fruits')


form.addEventListener('submit', function (event) {
    event.preventDefault()

    fruitToAdd = document.getElementById('add-fruit')
    newLi = document.createElement('li')
    newLi.innerHTML = fruitToAdd.value + "<button class = 'delete-btn'>x</button>"
    fruits.appendChild(newLi)

})



fruits.addEventListener('click', function (event) {

    if (event.target.classList.contains('delete-btn')) {
        const fruitToDelete = event.target.parentElement

        fruits.removeChild(fruitToDelete)

    }

})


filter = document.getElementById("filter")
filter.addEventListener('keyup', function (event) {
    textEntered = event.target.value.toLowerCase()
    const fruitItems = document.getElementsByClassName('fruit')

    for (i = 0; fruitItems.length; i++) {
        currentFruitText = fruitItems[i].firstChild.textContent.toLocaleLowerCase()

        if (currentFruitText.indexOf(textEntered) === -1) {
            fruitItems[i].style.display = "none"
        }
        else {
            fruitItems[i].style.display = "flex"
        }
    }
})