function pa(n, a1, r)
{
    aritmetica = []
    let soma_a = a1
    aritmetica.push(a1)
    for(let i = 1; i < n; i++)
    {
        a1 = a1+r
        soma_a += a1
        aritmetica.push(a1)
    }
    console.log(aritmetica)
    console.log(soma_a)
}



function pg(n, a1, r)
{
    geometrica = []
    let soma_g = a1
    geometrica.push(a1)
    for(let i = 1; i < n; i++)
    {
        a1 = a1*r
        soma_g += a1
        geometrica.push(a1)
    }
    console.log(geometrica)
    console.log(soma_g)
}

pa(5,3,2)
pg(5,3,2)