// crie o objeto literal curso que tem como atributos: 
// nome do curso (string), 
// nota de aprovação (number), 
// faltas máximas (number) e 
// uma lista de estudantes (um array composto pelos alunos criados no passo 2).


// Crie o método que permite adicionar alunos à lista do curso, ou seja, 
// quando chamamos nosso método(FUNCTION) em nosso objeto curso, 
// deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.






function estudante(nome, quantFaltas, notas){
    this.nome = nome
    this.quantFaltas = quantFaltas
    this.notas = notas
    this.media = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
          soma += this.notas[i];
        }
        return soma / this.notas.length;
      };
    this.falta =function(){
      this.quantFaltas+=1
    };
    
    }

    let aluno1 = new estudante("jesusCristo", 3, [10, 10, 10]);
    let aluno2 = new estudante("JordamPeterson", 31, [10, 9, 8]);
    let aluno3 = new estudante("trump", 0, [7, 6, 7]);

   
var curso={
nome: "Front-end",
mediaAprovado: 7.5 ,
maxFaltas: 10,
estudantes:[],
addAlunos: function(aluno){
    this.estudantes.push(aluno)
},
// listaAprovados:[],
// tabelaDeAprovaçao: function(sala){
//     for(let i=0; i<=sala.length ; i++){
    
//             if ((sala[i].media() >= this.mediaAprovado) && (sala[i].quantFaltas < this.maxFaltas)){
//                 console.log( this.listaAprovados.push('true'));
//             }else if((sala[i].media() >= 8.2) && (sala[i].quantFaltas = this.maxFaltas)){
//                 console.log( this.listaAprovados.push('true'));
//             }else{
//                 console.log( this.listaAprovados.push('false'));
//             }
         
//     }
//     console.log(this.listaAprovados)
// }


aprovado: function(aluno){
    if ((aluno.media() >= this.mediaAprovado) && (aluno.quantFaltas < this.maxFaltas)){
        return true;
    }else if((aluno.media() >= 8.2) && (aluno.quantFaltas = this.maxFaltas)){
        return true;
    }else{
        return false;
    }
}
}
curso.addAlunos(aluno1);
curso.addAlunos(aluno2);
curso.addAlunos(aluno3);
console.log(curso.aprovado(aluno1))

// tabelaDeAprovaçao: function(lista){
//     for(let i=0; i<=lista.length ; i++){
//         function(i){
//             if ((i.media() >= this.mediaAprovado) && (i.quantFaltas < this.maxFaltas)){
//                 return true;
//             }else if((i.media() >= 8.2) && (i.quantFaltas = this.maxFaltas)){
//                 return true;
//             }else{
//                 return false;
//             }
//         } 
//     }
// }