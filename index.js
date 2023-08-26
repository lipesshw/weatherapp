var express = require('express');
const ejs = require('ejs')
const path = require('path')
var app = express();
const port = 3000

  const dataDir = __dirname
  const templateDir = path.join(dataDir, 'views')
  app.use('/', express.static(path.join(dataDir, 'public')))
  const renderTemplate = (req, res, template = {}) => {
    res.render(path.join(templateDir, template))
  }


app.get('/', function(req, res) {
  renderTemplate(req, res, 'index.ejs')
}); 


app.listen(port, () => {
  console.log(`Iniciado na porta ${port}`)
})
