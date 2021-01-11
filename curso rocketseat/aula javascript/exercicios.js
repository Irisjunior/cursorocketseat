// 1 declare uma variavel de nome weigth.
//let weight
// 2 que tipo de dado é a variavel acima?
//console.log(typeof weight)

/*
3. declare uma variavel e atribua valores para cada um dos dados:
    * name:string   
    * age: Number (integer)
    * stars: Number (Float)
    * isSubscribed: Boolean
*/
/* isso e exemplo de objeto:
  let perfil1 = {
    name: "junior",
    age: 34,
    stars:3.6,
    issubscribed: false
}
*/
    //name = "junior"
    //age = 34
    //stars = 3.6
    //issubscribed = true

    //  4. A variavel abaixo e de que tipo de dado?
        //a. atribua as mesmas propriedades do exercicio 3.
        //b.mostre no console a seguinte mensagem:
          //<name>de idade <age> pesa <weight> kg.
          

     var student = {
      name: "junior",
      age: 34,
      weight: 3.6,
      issubscribed : true
    
  }
   /* console.log(typeof student)
    console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`) */


    /*
    5. Declare uma variavel do tipo Array,de nome students e atribua a ela nenhum valor,ou seja,somente o Array vazio.
   */
    var students = []

    /*
    6. Reatrtibua valor para  a variavel acima, colocando dentro dela o obrjeto students da questao 4.(Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
    */

    students = [student]
   console.log(students)
    /*
    7. Coloue no console o valor da posição zero do Array acima.
    */

   console.log(students[0])

   /*
   8. Crie um novo student e coloque na posição 1 do Array students
   */

    const student1 = {
      name:"gustavo",
      age:7,
      weight: 3.0,
      issubscribed : true

    }
    students[1] = student1
    console.log(students)

    /*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se vc acertou.

    console.log(a)
    var a = 1
    
    R: O trecho de código: "console.log(a)" exibirá undefined pois como foi declarada como "var" a mesma sofre hoisting e o código executa como se a váriavel estive-se no topo da aplicação,porem só será atribuido algum valor na linha abaixo do console.log
    
    */
   console.log(a)
    var a = 11


    