function lanchonete(codigo, quantidade)
{
    switch(codigo)
    {
        case 100:
            preço = 3.00
            nome = "Cachorro Quente"
            break
        case 200:
            preço = 4.00
            nome = "Hambúrguer Simples"
            break
        case 300:
            preço = 5.50
            nome = "Cheesburguer"
            break
        case 400:
            preço = 7.50
            nome = "Bauru"
            break
        case 500:
            preço = 3.50
            nome = "Refrigerante"
            break
        case 600:
            preço = 2.80
            nome = "Suco"
            break
    }
    return `${quantidade} x ${nome}, cada um custando ${preço}, ou seja, foram R$${(quantidade*preço).toFixed(2)} no total`
}

console.log(lanchonete(100, 10))