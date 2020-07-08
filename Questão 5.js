function simplificarTroco(valor, casas)
{
    valor = valor.toFixed(casas)
    return "R$" + valor
}

console.log(simplificarTroco(0.1+0.2, 2))
