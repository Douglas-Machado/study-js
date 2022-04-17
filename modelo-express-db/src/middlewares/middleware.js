module.exports.globalMiddleware = (req, res, next) => {
  res.locals.localVariable = 'local variable value'
  next()
}