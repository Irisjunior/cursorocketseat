/*
    Crie uma Funcao que receba uma string em celsius ou em fahrenheit e faça a transformação de uma unidade para outra

    formula para celsius:(30 °C × 9/5) + 32 = 86 °F


*/
 
//transform('50F')

function transformDegree (degree){
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau nao identificado')
    }

    // fluxo ideal, F para C
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula =(fahrenheit) => (fahrenheit - 32) * 5/9
    degreesign = 'C'

    return formula(updatedDegree) + degreesign

    try {
        console.log(transformDegree)
        transformDegree('50F')
       
    } catch (error) {
        console.log(error)
    }
}

console.log('oi')
