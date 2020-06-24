const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");
const footer = document.querySelector("footer")
const modal = document.querySelector(".modal")
for (let card of cards) {
    card.addEventListener("click", function(){
        const pageId = card.getAttribute("Id")
        modalOverlay.classList.add("active")
        footer.classList.add("inative")
        modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${pageId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    footer.classList.remove("inative")
    modalOverlay.querySelector("iframe").src = ""
    modal.classList.remove('maximize')
})

document.querySelector('.maximize-modal').addEventListener("click", function(){
    if (modal.classList.contains('maximize')) {
        modal.classList.remove('maximize')
    } else {
        modal.classList.add('maximize')
    }
})