function baskhara(a, b, c)
{
    delta = b**2 - 4*a*c
    if(delta < 0)
    {
        return "Delta é negativo"
    }
    else
    {
        let vetor_resultado = []
        let resultado1 = (-(b) + Math.sqrt(delta))/(2*a)
        vetor_resultado.push(resultado1)
        let resultado2 = (-(b) - Math.sqrt(delta))/(2*a)
        vetor_resultado.push(resultado2)
        return vetor_resultado
    }
}

//Precedência é importante dms

console.log(baskhara(1, -5, 6))
