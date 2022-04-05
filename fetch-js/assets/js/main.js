//click do usuário
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault(); //prevenindo o comportamento padrão de atualizar a página ao clicar no link
    carregaPagina(el);
  }
});


//as duas funções abaixo fazem a mesma coisa, porém a segunda utiliza async e await para aguardar a requisição ser feita

// function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   fetch(href)
//     .then(response =>{
//       console.log(response)
//      if(response.status !== 200) throw new Error('Erro 404!');
//       return response.text();
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.log(e))
// }

async function carregaPagina(el) {
  try{
    const href = el.getAttribute('href');
    const response = await fetch(href);
  
    if(response.status !== 200) throw new Error('Erro 404!');
  
    const html = await response.text();
    carregaResultado(html)
  } catch(e){
    console.log(e)
  }
}

function carregaResultado(response) { //carregando a resposta obtida na mesma pagina
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
