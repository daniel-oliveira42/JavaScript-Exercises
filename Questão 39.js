vetor1 = [1,2,3]
vetor2 = [4,5,6]

console.log("Vetor 1 (Antes): ", vetor1)
console.log("Vetor 2 (Antes): ", vetor2)

function troca(vet1, vet2)
{
    n = vet1.length
    for(let i = 0;i < n;i++)
    {
        vet2.push(vet1.shift())
        vet1.push(vet2.shift()) 
    }
    console.log("Vetor 1 (Depois): ", vet1)
    console.log("Vetor 2 (Depois): ", vet2)
}

troca(vetor1, vetor2)