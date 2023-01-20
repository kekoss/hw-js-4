/* 
1. Для того щоб виконувати одну і ту саму дію кілька разів, можна записати функцію і викликати її в будь-якому місці в коді
2. Щоб функція не повертала undefined
3. return зупиняє функцію і повертає значення яке записане справа від нього
*/

"use strict"
let a = ''
let b = ''
for( let i = 0; i < 100; i++){
    a = prompt('First number', `${a}`)
    b = prompt('Second number', `${b}`)
    if (!a || !b || 0 === a.length || 0 === b.length || isNaN(a) || isNaN(b) || a.replace(/\s/g,"") == "" || b.replace(/\s/g,"") == ""){
        continue
    } else if (!isNaN(a) && !isNaN(b)) {
        a= +a
        b= +b
        break
    }
}

let operation = prompt("Choose math operation: /,+,-,*")

function calculateNumbers() {
    if(operation == "+"){
        return console.log(a + b)
    }   else if (operation == "-"){
        return console.log(a - b)
    }   else if (operation == "*"){
        return console.log(a * b)
    }   else if (operation == "/"){
        return console.log(a / b)
    }
}

calculateNumbers()

