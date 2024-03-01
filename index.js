function saveLocalStorage(event) {
    event.preventDefault()
    const username = event.target.username.value
    const email = event.target.email.value
    const phone = event.target.phone.value

    const obj = {
        username: username,
        email: email,
        phone: phone

    }
    localStorage.setItem(obj.email, JSON.stringify(obj))
    showDetailsOnScreen(obj);
}

function showDetailsOnScreen(obj) {
    const parentElem = document.getElementById('listOfItems')
    parentElem.innerHTML += `<li> ${obj.username} | ${obj.email} | ${obj.phone} </li>`
}