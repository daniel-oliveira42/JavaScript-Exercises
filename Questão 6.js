

function jurosSimples(ci, tj, ta) { //ci = capital inicial, tj = taxa de juros, ta = tempo de aplicação
    let juros = ci*tj*ta
    let info_simples = {
        juros: juros,
        montante: juros + ci
    }
    return info_simples
} 

function jurosCompostos(ci, tj, ta) { //ci = capital inicial, tj = taxa de juros, ta = tempo de aplicação
    const capital_investido = ci
    for(let i = 0;i < ta;i++)
    {
        ci += ci*tj
    }
    let info_compostos = {
        juros: ci,
        montante: ci + capital_investido
    }
    return info_compostos
} 

console.log("Montante (Juros Simples): ", jurosSimples(1000, 0.1, 5).montante)
console.log("Juros (Juros Simples): ", jurosSimples(1000, 0.1, 5).juros)

console.log("Montante (Juros Compostos): ", jurosCompostos(10, 0.5, 10).montante)
console.log("Juros (Juros Compostos): ", jurosCompostos(10, 0.5, 10).juros)
