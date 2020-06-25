const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require('./data')

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true
})

const data = {
  avatar_url: "https://avatars1.githubusercontent.com/u/26012387?s=400&u=f58b78fd34750f59ab053d7637b5ca926c213149&v=4",
  name: "Matheus Caldeira",
  role: "Estudante Full-Stack",
  description: "Programador estudando a stack Javascript para desenvolvimento Web.",
  links: [
    { name: 'GitHub', url: 'https://github.com/matheus-caldeira' },
    { name: 'Linkedin', url: 'https://www.linkedin.com/in/caldeiramatheus' },
  ]

}

server.get('/', (req, res) => {
  return res.render('about', {data})
})

server.get('/portifolio', (req, res) => {
  return res.render('portifolio', { cards: videos, data })
})

server.get('/videos/:id', (req, res) =>{
  const { id } = req.params

  const video = videos.find(video => video.id === id)

  if (!video)
    return res.status(404).render("not-found");

  return res.render('video', { card:video } )
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5000, () => {
  console.log("server is running")
})