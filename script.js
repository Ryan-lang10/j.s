// seleciona os elementos do DOM que serão manipulados
const botao = document.getElementById("botaoInteragir");
const  mensagem = document.getElementById("mensagem");

// adiciona  um evento de clique no botão
botao.addEventListener("click", ()  => {
    // solicita o nome do usuario
    let nome = prompt("qual e a sua idade ?");

   // condição para verificar se a idade foi fornecido
   if (nome) {
    // solicita a idade do usaurio 

    let idade  = prompt("qual e a sua idade ?");    
    // condição para verificar se a idade é um numero valido
   
    if (isNaN(idade)  || idade < 0) {
     mensagem.innerText = "por favor, insira uma idade valida.";
     mensagem.style.color ="red"; // altera a cor do texto para vermelho 
    }
    else {
        // saida de dados com base na idade fornecida 
        if (idade < 18){
        mensagem.innerText =  `olá, ${nome} você tem apenas $(idade)  anos.`
        mensagem.style.color = "blue"; // acelera  a cor do texto para azul
}    
    else{

mensagem.innerText = `ola, ${nome} você é maior de idade com $(idade) anos.`; 
mensagem.style.color = "green"; // altera a cor do texto para verde 
    }
console.log(`nome do usaurio: ${nome}`);
console.log(`idade de usuario:${idade}`);        }

} else{
mensagem.innerText = "nome nao fornecido. por favor , insira um nome.";
mensagem.style.color = "orange"; // altera cor do texto para laranja 

}

   });

