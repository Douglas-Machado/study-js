exports.globalMiddleware = (req, res, next) => {
  res.locals.localVariable = 'local variable value'
  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  if(err && err.code === 'EBADCSRFTOKEN') {
    return res.render('error')
  }
}
