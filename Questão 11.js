function bisexto(ano)
{
    if(ano % 4 == 0)
    {
        if ((!(ano % 100 == 0)) || (ano % 400 == 0))
        {
            console.log("O ano é bissexto")
            return true
        } 
        else
        {
            console.log("O ano NÃO é bissexto")
            return false
        }
    }
    else
    {
        console.log("O ano NÃO é bissexto")
        return false
    } 
}

bisexto(1700)

