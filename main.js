const form = document.querySelector("form");
const submitBtn = document.querySelector("button");
const inputName = document.querySelector("#input-name");
const inputPhone = document.querySelector("#input-phone");
const tBody = document.querySelector("tbody")

const contactsList = [];
const nameList = [];

function addingContact(){
    const contact = {
        name: inputName.value,
        phone:inputPhone.value
    }
    contactsList.push(contact)
    nameList.push(inputName.value)
}

function fillingList(){
    tBody.innerHTML = ""
    contactsList.forEach(contact => {
        const tr = document.createElement('tr');
        tr.innerHTML= `<td>${contact.name}</td><td>${contact.phone}</td>`
        tBody.appendChild (tr);
    });
}

form.addEventListener('submit', (e) => {
e.preventDefault();
if (nameList.includes(inputName.value)) {
    alert(`${inputName.value} is already on list`)
} else {
    addingContact();
    fillingList()
}

inputName.value = ""
inputPhone.value = ""
})

