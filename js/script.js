let images = [{
        imgSrc: 'images/1.png',
        name: "Earth"
    },
    {
        imgSrc: 'images/2.png',
        name: "Jupiter"
    },
    {
        imgSrc: 'images/3.png',
        name: "Mars"
    },
    {
        imgSrc: 'images/4.png',
        name: "Mercury"
    },
    {
        imgSrc: 'images/5.png',
        name: "Moon"
    },
    {
        imgSrc: 'images/6.png',
        name: "Neptune"
    },
    {
        imgSrc: 'images/7.png',
        name: "Saturn"
    },
    {
        imgSrc: 'images/8.png',
        name: "Sun"
    },
    {
        imgSrc: 'images/9.png',
        name: "Uranus"
    },
    {
        imgSrc: 'images/10.png',
        name: "Venus"
    },
    {
        imgSrc: 'images/1.png',
        name: "Earth"
    },
    {
        imgSrc: 'images/2.png',
        name: "Jupiter"
    },
    {
        imgSrc: 'images/3.png',
        name: "Mars"
    },
    {
        imgSrc: 'images/4.png',
        name: "Mercury"
    },
    {
        imgSrc: 'images/5.png',
        name: "Moon"
    },
    {
        imgSrc: 'images/6.png',
        name: "Neptune"
    },
    {
        imgSrc: 'images/7.png',
        name: "Saturn"
    },
    {
        imgSrc: 'images/8.png',
        name: "Sun"
    },
    {
        imgSrc: 'images/9.png',
        name: "Uranus"
    },
    {
        imgSrc: 'images/10.png',
        name: "Venus"
    }
]

let section = document.querySelector('section')
let score = document.querySelector("h2")
let gameScore = 0
let count = document.querySelector(".timer")
let timeLeft = 120
let doneCards = []



function randomize() {
    let cardData = images
    cardData.sort(() => Math.random() - 0.5)
    return cardData
}

function Createcard() {
    let cardData = randomize()

    cardData.forEach(item => {
        let card = document.createElement('div')
        let face = document.createElement('img')
        let back = document.createElement('img')
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'

        face.src = item.imgSrc
        back.src = "images/card-bg.jpg"

        card.setAttribute("name", item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)


        card.addEventListener('click', (e) => {
            if(card.classList.contains("done") == false){            
                card.classList.toggle("flipCard")
                checkCards(e)}
        })
    })
}

let checkCards = (e) => {
    let clickedCard = e.target
    clickedCard.classList.add("flipped")
    let flipped = document.querySelectorAll(".flipCard")
    doneCards.push(clickedCard)

    if (doneCards.length == 2) {
        if (doneCards[0].getAttribute("name") === doneCards[1].getAttribute("name")) {
            flipped.forEach((item) => {
                setTimeout(() =>item.classList.add('done'),1000)
                beep()
                score.innerHTML = ''
                gameScore += +20
                score.innerHTML = `Score:${gameScore}`
                if(gameScore == 2200){
                    alert("You win!!!")
                }
            }) 
        } else {
            doneCards.forEach((card) => {
                card.classList.remove('flipped')
                setTimeout(() => card.classList.remove("flipCard"),1000)
            })
        }
        doneCards = []
    }
}
Createcard()

function beep() {
let snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");
snd.play();
}

function timeEnding(){
    let snd = new Audio("snd/timer.mp3")
    snd.play()
}

function updateTimer(){
    timeLeft = timeLeft - 1
    if(timeLeft >= 0){
        count.innerHTML = 
        `
        <span><i class="fa-solid fa-stopwatch"></i></span>
        <span>${timeLeft}</span>
        `
    }
    if(timeLeft == 0 && gameScore < 400){
        gameOver()
    }
    if(timeLeft == 10){timeEnding()}
    if(timeLeft <= 10){
        count.innerHTML = 
        `
        <span style="color:red;"><i class="fa-solid fa-stopwatch"></i></span>
        <span style="color:red;">${timeLeft}</span>
        `
    }
}

function timer(){
    let countDown = setInterval(updateTimer ,1000)
}

function gameOver(){
    alert("Game Over")
    document.location.reload(true)

}
timer()
updateTimer()