/*

function name - sayHi
parameters: nameStr = string

return string
concatination
interpolation
*/

function sayHi(name){
    let newStr = `Hi, ${name}`
    return newStr
}

console.log(sayHi("Jimmy"))

/*

*/

//BigString

function bigString(str1, str2){

    if(str1.length > str2.length){
        return(str1)
    } else if(str2.length > str1.length){
        return (str2)
    } else if(str1.length === str2.length){
        console.log(`${str1} is equal to ${str2} `)
    }
    
}

console.log(bigString("CoCo", "Puffs"))

/*

*/

//bigNumber

function bigNumber(num1, num2){

if(num1 > num2){
    return num1
} else if(num2 > num1){
    return num2
} else if (num1 === num2){
    return `${num1} is equal to ${num2}`
}
}

console.log(bigNumber(10,20))
console.log(bigNumber(21,12))
console.log(bigNumber(44,44))

/*

*/

//fiveMore

function fiveMore(numsArray){

    for(let i = 0; i < numsArray.length; i++){

        if(numsArray[i]  % 2 !== 0){
             numsArray[i] += 5
        }
    }
    return numsArray
}

console.log(fiveMore([1, 2, 3, 4]))
console.log(fiveMore([1, 3, 5, 7, 9]))
console.log(fiveMore([2, 22, 222]))

/*

*/

//arraySummer

function arraySummer(nums1Array){
    let sum = 0
    for(let i = 0; i < nums1Array.length; i++){
        sum += nums1Array[i]
    }
    return sum
}

console.log(arraySummer([1, 2, 3, 4]))

/*

*/

// everyDivisible

function everyDivisible(n){

    if(n < 10){
    for(let number = 1; number <= 100; number++){

        if(number % n === 0){
            console.log(number)
            }
        }
    }
}

everyDivisible(5)