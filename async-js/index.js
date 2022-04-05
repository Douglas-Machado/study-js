//randomizador gerando numeros aletorios de 1 a 3 arredondados com o método math.floor
function rand(min = 1, max = 3){
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

//promise
function wait(msg, time){
  return new Promise((resolve, reject) => { //parametros padrão de uma promise(tem esses nomes pro convenção)
    setTimeout(() => { //setTimeout para executar, simulando uma resposta de API
      if(typeof msg !== 'string'){ //verificando o tipo do dado recebido
        reject('CAI NO ERRO'); //reject irá retornar essa mensagem caso o parâmetro recebido seja inválido
        return;
      }
      resolve(msg.toUpperCase() + ' - Passei na promise'); //em caso de sucesso a função irá 'resolver' o seguinte código
      return;
    }, time)
  })
}

//determinando uma função assíncrona
async function execute(){
  try{ //try 
    const exec1 = await wait("Frase 1", rand()) // o código irá 'esperar' a execução da função que foi passada para o await
    console.log(exec1)
  
    const exec2 = await wait("Frase 2", rand())
    console.log(exec2)
  
    const exec3 = await wait("Frase 3", rand())
    console.log(exec3)
  } catch(e){ //catch (error) - essa variável armazena o que foi retornado do reject
    console.log(e)
  }
  
}
execute()