const count = document.getElementById("number")
const inputNumber = document.getElementById("numberToAdd")

function checkLess(){
    
}

function add(){
    let currCount = Number(count.innerHTML)
    newCount = currCount + 1
    count.innerHTML = newCount
}

function sub(){
    let currCount = Number(count.innerHTML)
    newCount = currCount - 1
    newCount < 0 ? newCount = 0 : newCount
    count.innerHTML = newCount
}

function addUser(){
    let currCount = Number(count.innerHTML)
    newCount = currCount + Number(inputNumber.value)
    newCount < 0 ? newCount = 0 : newCount
    count.innerHTML = newCount
}