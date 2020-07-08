const operação = "/"
const numero1 = 2
const numero2 = 3


switch(operação)
{
    case "+": 
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
    break
    case "-": 
    console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
        break
    case "*": 
    console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`)
        break
    case "/": 
    console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
        break   
    default:
        console.log("Operação inválida")
        break
}