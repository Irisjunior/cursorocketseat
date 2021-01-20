/* ###Sistema de gastos familiar
Crie um objeto que possuira 2 prepriedades,ambas do tipo array
    * receitas:[]
    * despesas:[] 

    Agora,crie uma funcao que irá calcular o total de receitas e despesas e ira mostrar uma mensagem se a familia esta com o saldo positivo ou negativo,seguido do valor do saldo

*/

let familia = {
    receitas:[1500.52,1000.89,300],
    despesas:[300.47,300,100,50,50.25]
}

function soma(array){
    let total = 0;
    for(let value of array){
    total +=value
}
return total;

}


function balanco(){
    const calculoreceitas = soma(familia.receitas)
    const calculodespesas = soma(familia.despesas)
    const total = calculoreceitas - calculodespesas
    let situacao = "familia no negativo"

    if(total < 0){
        situacao = "familia no negativo"
    }else if(total<=100){
        situacao = "familia perto da falencia!"
    }else if(total>100){
        situacao="familia no positivo!!"
    }
    console.log(`Seu saldo é R$ ${total.toFixed(2)} e sua situacao é ${situacao} `)
}   

balanco()