const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/54187353?s=460&u=99d49f08c5fa8eaa9777a00597504828946e03f5&v=4",
        name: "Stephanie",
        role: 'Estudante da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a>',
        description: "Olá 😊 sou de São Paulo tenho 25 anos, formada em sistema de informação, sou estudante da rockeatseat participei do NLW e isso me deu iniciativa de fechar o pacote do bootcamp Launchbase e entrar de cabeça nessas aulas para conseguir uma oportunidade na area de desenvolvimento que tanto gosto ! 🚀",
        links: [
            { name:"Github", url: "https://github.com/steephanie" },
            { name:"Linkedin", url: "https://www.linkedin.com/in/stephanie-nascimento-71ab51152/" }
        ]
    }


    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {

    return res.render("portfolio", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item:video })
})

server.listen(5000, function() {
    console.log("server is running")
})