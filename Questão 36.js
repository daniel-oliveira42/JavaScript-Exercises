
vetor1 = [1,2,3,4,5]
console.log(vetor1)

function multiplicacao(vetor, inteiro)
{
    for(let i = 0;i < vetor.length;i++)
        {
            vetor[i] = vetor[i]*inteiro
        }
        return vetor
} 

vetor2 = multiplicacao(vetor1, 5)

console.log(vetor2)

function multiplicacaoCondicional(vetor, inteiro)
{
for(let i = 0;i < vetor.length;i++)
{
    if (vetor[i] >= 5)
    {
        vetor[i] = vetor[i]*inteiro
    }
}
return vetor
}

vetor3 = [3,4,5,6,7]
console.log(vetor3)
vetor4 = multiplicacaoCondicional(vetor3, 10)

console.log(vetor4)