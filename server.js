const { parseReq } = require('./api.js');
const express = require('express')
const next = require('next')
const dev = false; //process.env.NODE_ENV !== 'production'
const port = process.env.PORT || dev ? 8080 : 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/', (req, res) => {
    return app.render(req, res, '/index', req.query)
  })

  server.get('*', (req, res) => {
    res.send(JSON.stringify(parseReq(req)));
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:'+port)
  })
})