let screen = document.querySelector(".screen")
let num = document.querySelectorAll(".num")
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let mul = document.querySelector(".mul")
let divide = document.querySelector(".divide")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")
let dot = document.querySelector(".dot")

let result = 0;
let firstAdd = 0
let firstSub = 0
let firstMul = 1
let firstDiv = 1

window.onload = function () {
    screen.textContent = result
}



clear.onclick = () => { 
    screen.textContent = 0
    result = 0;
    firstAdd = 0
    firstSub = 0
}
num.forEach((num) => {
    num.onclick = () => {
        if (screen.textContent == 0) {
            screen.textContent =""
        }
        screen.textContent += `${num.textContent}`
        result += `${num.textContent}`
        // result = Number(result)
        console.log(result)
    }
    
})
add.onclick = () => {
    result = Number(result)
    console.log(result)
    if (firstSub != 0) {
        result = firstSub - result
        firstSub = 0
    }
    if (firstAdd != 0) {
        result += firstAdd
        firstAdd = 0
    }
    result *= firstMul
    firstMul = 1
    if (firstDiv != 1) {
        result = firstDiv / result
        firstDiv = 1
    }
    screen.textContent += `${add.textContent}`
    firstAdd += result
    result = 0
    equal.onclick = () => { 
        result = Number(result)
        result += firstAdd
        screen.textContent = result
        firstAdd = 0
        firstSub = 0
        firstMul = 1
        firstDiv = 1
    }
}

sub.onclick = () => {
    result = Number(result)
    if (firstAdd != 0 ) {
        result += firstAdd
        firstAdd = 0

    }
    if (firstSub != 0) {
        result = firstSub - result
        firstSub = 0
    }
    result *= firstMul
    firstMul = 1
    if (firstDiv != 1) {
        result = firstDiv / result
        firstDiv = 1
    }
    screen.textContent += `${sub.textContent}`
    firstSub += result
    result = 0
    equal.onclick = () => { 
        result = Number(result)
        result = firstSub - result
        screen.textContent = result
        firstSub = 0
        firstAdd = 0
        firstMul = 1
        firstDiv = 1
    }
}

mul.onclick = () => {
    result = Number(result)
    if (firstAdd != 0) {
        result += firstAdd
        firstAdd = 0

    }
    if (firstSub != 0) {
        result = firstSub - result
        firstSub = 0
    }
    result *= firstMul
    firstMul = 1
    if (firstDiv != 1) {
        result = firstDiv / result
        firstDiv = 1
    }
    screen.textContent += `${mul.textContent}`
    firstMul *= result
    result = 0
    equal.onclick = () => { 
        result = Number(result)
        result *= firstMul
        screen.textContent = result
        firstSub = 0
        firstAdd = 0
        firstMul = 1
        firstDiv = 1
    }
}

divide.onclick = () => {
    result = Number(result)
    if (firstAdd != 0) {
        result += firstAdd
        firstAdd = 0

    }
    if (firstSub != 0) {
        result = firstSub - result
        firstSub = 0
    }
    if (firstDiv != 1) {
        result = firstDiv / result
        firstDiv = 1
    }
    result *= firstMul
    firstMul = 1
    screen.textContent += `${divide.textContent}`
    firstDiv *= result
    result = 0
    equal.onclick = () => { 
        result = Number(result)
        result = firstDiv / result
        screen.textContent = result
        firstSub = 0
        firstAdd = 0
        firstMul = 1
        firstDiv = 1
    }
}


