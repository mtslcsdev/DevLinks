function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img
    const img = document.querySelector("#profile img")

    // substituir a imagem
    if (html.classList.contains("light")) {
    // se tiver com light mode, troca o avatar pro light
        img.setAttribute("src", "./assets/avatar-01.png")
    } else {
    // se tiver sem light mode, deixa o avatar padrão
        img.setAttribute("src", "./assets/avatar-02.png")
    }
}