exports.homePage = (req, res) => { //rota  sendo exportada
  res.render('index');
}

exports.getPost = (req, res) => {
  res.render('list',  {
    name: req.body.name,
    age: req.body.age
  })
}