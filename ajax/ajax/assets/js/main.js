const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //instanciando o objeto XMLHttpRequest
    xhr.open(obj.method, obj.url, true); //get com os parâmetros método e url
    xhr.send(); //post

    xhr.addEventListener('load', () => { // resolve e reject para os casos onde a resposta do servidor não for 200
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault(); //prevenindo o comportamento padrão de atualizar a página ao clicar no link
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  const href = el.getAttribute('href');

  try {
    const response = await request(objConfig);
    carregaResultado(response);
  } catch(e) {
    console.log(e);
  }
}

function carregaResultado(response) { //carregando a resposta obtida na mesma pagina
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}
