exports.homePage = (req, res) => { //rota  sendo exportada
  // enviando o html da página abaixo
  res.send(` 
  <form action="/" method="post">
  Name: <input type="text" name="name" placeholder="name"><br>
  Age: <input type="text" name="age" placeholder="age"><br>
  <button>Submit</button>
  </form>
  `); //html da página 
}

exports.getPost = (req, res) => {
  res.send('post route')
}