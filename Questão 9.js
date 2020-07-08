/*
Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado.
*/

/* 
- Nota de 0 a 100
- Abaixo de 40 é reprovado
- Para aredondar, se a diferença entre a nota e o próximo multiplo de 5 for menor que 3, arredonda para esse próximo múltiplo de 5
- Se a nota for abaixo de 38, não arredonda
- Se for 38, dá para arredondar para 50
*/

function notas(nota)
{
    arredondar(nota)
    if (nota > 40) return "Aprovado"
    else return "Reprovado"
}

function arredondar(nota)
{
    console.log(nota%5)
    if(nota % 5 > 2)
    {
        nota = nota + nota % 5
    } 
    else
    {
        nota = nota - nota % 5
    }
    console.log("Nota consertada: ", nota)
}


console.log(notas(98))