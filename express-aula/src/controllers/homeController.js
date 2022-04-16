exports.homePage = (req, res) => { //rota  sendo exportada
  // enviando o html da página abaixo
  res.render('index'); //html da página 
}

exports.getPost = (req, res) => {
  res.send('post route')
}