const personForm = document.querySelector('form')

const handleSubmit = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const list = document.getElementById('ulList')
    const name = form.personName.value

//This will promote the name, giving it some flair

const promoteButton = document.createElement('button')
    promoteButton.type = "submit"
    promoteButton.textContent = "That'll Do, Pig (Promote)"
    list.insertBefore(promoteButton, list.firstChild)
    promoteButton.addEventListener('click', function (){
        let listing = this.previousElementSibling.previousElementSibling
        listing.style.padding = "3px 1px 3px 5px"
        listing.style.width = listing.textContent.length * 10 + "px"
        listing.style.borderStyle = "dotted solid double dashed"
        listing.style.color = "gold"
        listing.style.fontWeight = "bolder"
    })

//This button will delete the most recent entry

    const delButton = document.createElement('button')
    delButton.type = "submit"
    delButton.textContent = "Thou Shalt Not Stay (Remove)"
    delButton.display = "inline"
    list.insertBefore(delButton, list.firstChild)
    delButton.addEventListener('click', function (){
       this.nextElementSibling.remove()
       this.previousElementSibling.remove()
       this.remove()

    })


    const element = document.createElement('li')
    element.textContent = name

    list.insertBefore(element, list.firstChild)
}

personForm.addEventListener('submit', handleSubmit)
