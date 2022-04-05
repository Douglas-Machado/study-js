// buscando dados do json
// fetch('pessoas.json')
//   .then(resposta => resposta.json())
//   .then(json => carregaElementosNaPagina(json));

//requisição com axios(baseado em XMLHttpRequest)
axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json){
  const table = document.createElement('table');
  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.name;
    tr.appendChild(td1)

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.age;
    tr.appendChild(td2)

    let td3 = document.createElement('td');
    td3.innerHTML = pessoa.gender;
    tr.appendChild(td3)

    table.appendChild(tr)
  }

  const resultado = document.querySelector('.resultado');
  resultado.appendChild(table)
}