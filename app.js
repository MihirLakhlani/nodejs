const http = require('http');
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.warn('error caught', err)
  }

  console.warn(`server is listening on ${port}`)
})