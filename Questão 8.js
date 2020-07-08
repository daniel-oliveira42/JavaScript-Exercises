

function basqueteDePedro(a)
{   
    //Declarações
    let array_pont = a.split(", ")
    let cont = 0
    let pior_jogo = 1
    let menor = array_pont[0]
    let maior = array_pont[0]

    for(let i = 1; i < array_pont.length; i++)
    {
        if(array_pont[i] > maior) 
        {
            maior = array_pont[i]
            cont++
        }
        else if(array_pont[i] < menor) 
        {
            menor = array_pont[i]
            pior_jogo = i+1
        }

    }
    return [cont, pior_jogo]
}

let a = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
console.log(basqueteDePedro(a))