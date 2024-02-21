var points = 0  
function score_plus(){ 
    points+=5
    document.getElementById("score").innerHTML ='SCORE: '+ points
}
let cardArray = [];
let sourceArray =
    [
        "../cards/spades 1.PNG", "../cards/clubs 1.PNG", "../cards/hearts 1.PNG", "../cards/diamond 1.PNG",
        "../cards/spades 2.PNG", "../cards/clubs 2.PNG", "../cards/hearts 2.PNG", "../cards/diamond 2.PNG",
        "../cards/spades 3.PNG", "../cards/clubs 3.PNG", "../cards/hearts 3.PNG", "../cards/diamond 3.PNG",
        "../cards/spades 4.PNG", "../cards/clubs 4.PNG", "../cards/hearts 4.PNG", "../cards/diamond 4.PNG",
        "../cards/spades 5.PNG", "../cards/clubs 5.PNG", "../cards/hearts 5.PNG", "../cards/diamond 5.PNG",
        "../cards/spades 6.PNG", "../cards/clubs 6.PNG", "../cards/hearts 6.PNG", "../cards/diamond 6.PNG",
        "../cards/spades 7.PNG", "../cards/clubs 7.PNG", "../cards/hearts 7.PNG", "../cards/diamond 7.PNG",
        "../cards/spades 8.PNG", "../cards/clubs 8.PNG", "../cards/hearts 8.PNG", "../cards/diamond 8.PNG",
        "../cards/spades 9.PNG", "../cards/clubs 9.PNG", "../cards/hearts 9.PNG", "../cards/diamond 9.PNG",
        "../cards/spades 10.PNG", "../cards/clubs 10.PNG", "../cards/hearts 10.PNG", "../cards/diamond 10.PNG",
        "../cards/spades 11.PNG", "../cards/clubs 11.PNG", "../cards/hearts 11.PNG", "../cards/diamond 11.PNG",
        "../cards/spades 12.PNG", "../cards/clubs 12.PNG", "../cards/hearts 12.PNG", "../cards/diamond 12.PNG",
        "../cards/spades 13.PNG", "../cards/clubs 13.PNG", "../cards/hearts 13.PNG", "../cards/diamond 13.PNG",
    ]
let shuffleCards = [];
let index = 0;
for (let i = 1; i <= 13; i++) {
    shuffleCards.push({
        id: index, number: i, color: 'black', shape: 'shape0', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    shuffleCards.push({
        id: index, number: i, color: 'black', shape: 'shape1', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    shuffleCards.push({
        id: index, number: i, color: 'red', shape: 'shape2', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    shuffleCards.push({
        id: index, number: i, color: 'red', shape: 'shape3', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
}
index = 0;
for (let i = 1; i <= 13; i++) {
    cardArray.push({
        id: index, number: i, color: 'black', shape: 'shape0', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    cardArray.push({
        id: index, number: i, color: 'black', shape: 'shape1', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    cardArray.push({
        id: index, number: i, color: 'red', shape: 'shape2', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
    cardArray.push({
        id: index, number: i, color: 'red', shape: 'shape3', source: sourceArray[index], column1: -1, column2: -1, place: -1
    })
    index++;
}

function Game() {//set up cards
    index = 0
    var topCards = document.createElement("div")
    topCards.id = "topCards"
    var fourCards = document.createElement("div")
    fourCards.id = "fourCards"
    for (let i = 0; i < 4; i++) {
        var card = document.createElement("div")
        card.classList.add("topCards")
        card.id = `shape${i}`
        fourCards.appendChild(card)
    }
    var deck = document.createElement("div")
    var closedDeck = document.createElement("div")
    var openedDeck = document.createElement("div")
    deck.appendChild(closedDeck)
    deck.appendChild(openedDeck)
    closedDeck.style.backgroundImage = 'url("../cards/back.PNG")';
    closedDeck.style.backgroundSize = ("100% 100%")
    closedDeck.classList.add("topCards")
    deck.id = "deck"
    closedDeck.id = "closed"
    openedDeck.id = "open"
    topCards.appendChild(deck)
    topCards.appendChild(fourCards)
    deck.addEventListener("click", openDeckCard)
    var div = document.createElement("div");
    div.classList.add("rows");
    for (let i = 0; i < 7; i++) {
        var column = document.createElement("div");
        var column1 = document.createElement("div");
        var column2 = document.createElement("div");
        column1.id = `column1${i}`
        column2.id = `column2${i}`
        column1.classList.add("column1")
        column2.classList.add("column2")
        column.classList.add("column")
        for (let j = 0; j < i; j++) {
            var img = document.createElement("img");
            img.id = `start${j}`
            img.classList.add = ("backCard")
            img.style.backgroundImage = 'url("../cards/back.PNG")';
            img.style.backgroundSize = ("100% 100%")
            index++
            column1.appendChild(img)
            column.appendChild(column1);
        }
        var img2 = document.createElement("img");
        img2.style.backgroundImage = 'url("../cards/back.PNG")';
        img2.style.backgroundSize = ("100% 100%")
        img2.classList.add("startgame")
        img2.addEventListener("click", (e) => jump(e))
        img2.addEventListener("dragover", (e) => ondragover(e))
        img2.addEventListener("dragstart", (e) => ondragstart(e))
        img2.addEventListener("drop", (e) => ondrop(e))
        column2.appendChild(img2);
        column.appendChild(column2);
        div.appendChild(column)
    }
    document.getElementById("gameBoard").appendChild(topCards)
    document.getElementById("gameBoard").appendChild(div)
}

let deckCardArry = [];
let i;
function shuffle() {//shuffle cards
    for (i = 0; i < 52; i++) {
        let a = Math.floor(Math.random() * i);
        let temp = shuffleCards[i]
        shuffleCards[i] = shuffleCards[a]
        shuffleCards[a] = temp
    }
    for (let i = 51; i >= 28; i--) {
        deckCardArry.push(shuffleCards[i])
    }
}

let number = 0
function startOpen() {//start game
    let img = document.getElementsByClassName("startgame");
    for (let number = 0; number < 7; number++) {
        img[number].src = shuffleCards[number].source;
        img[number].id = shuffleCards[number].id;
        shuffleCards[number].column = number;
        cardArray[shuffleCards[number].id].column1 = `column1${number}`
        cardArray[shuffleCards[number].id].column2 = `column2${number}`
    }

}

function ondragover(e) {//drag and drop
    e.preventDefault();
}
function ondragstart(e) {
    e.dataTransfer.setData("card", e.target.id);
}
function ondrop(e) {
    e.dataTransfer.setData("card", e.target.id);
    let dropId = e.target.id
    let dragId = e.dataTransfer.getData("card");
    let dropParentking = document.getElementById(dropId)
    let flag = 0
    if (cardArray[dragId].number == 13 && !dropParentking.childElementCount) {
        score_plus()
        flag=1
        let updateDropColumn1 = -1
        let updateDropColumn2 = dropId
        if (cardArray[dragId].column2 == -1) {
            deckCardArry.splice(count - 1, 1);
            ondropOpenCard(dragId, updateDropColumn1, updateDropColumn2);
        } else {
            cardArray[shuffleCards[number].id].column1 = cardArray[dragId].column1
            cardArray[shuffleCards[number].id].column2 = cardArray[dragId].column2
            ondDropCard(dragId, dropParentking, updateDropColumn1, updateDropColumn2)
        }
    }
    else {
        if (cardArray[dragId].number != 13&&((cardArray[dragId].color != cardArray[dropId].color && cardArray[dragId].number + 1 == cardArray[dropId].number))) {
            score_plus()
            let dropParent = document.getElementById(cardArray[dropId].column2)
            let updateDropColumn2 = cardArray[dropId].column2
            let updateDropColumn1 = cardArray[dropId].column1
            if (cardArray[dragId].column2 == -1) {
                deckCardArry.splice(count - 1, 1);
                ondropOpenCard(dragId, updateDropColumn1, updateDropColumn2);
            } else {
                cardArray[shuffleCards[number].id].column1 = cardArray[dragId].column1
                cardArray[shuffleCards[number].id].column2 = cardArray[dragId].column2
                ondDropCard(dragId, dropParent, updateDropColumn1, updateDropColumn2)
            }
        }
    }
}


function ondDropCard(dragId, dropParent, updateDropColumn1, updateDropColumn2) {//drop card from  gameboard
    let dragParent = document.getElementById(cardArray[dragId].column2)
    let dragParentClose = document.getElementById(cardArray[dragId].column1)
    let dragChildrensCount = dragParent.childElementCount
    let dragChildNodes = dragParent.childNodes;
    let child = document.getElementById(cardArray[dragId].id)
    let child_index;
    for (let i = 0; i < dragChildrensCount; i++) {
        if (child === dragChildNodes[i]) {
            child_index = i;
            break;
        }
    }
    for (let i = child_index; i < dragChildrensCount; i++) {
        cardArray[dragParent.children[child_index].id].column2 = updateDropColumn1;
        cardArray[dragParent.children[child_index].id].column2 = updateDropColumn2;
        dropParent.appendChild(dragParent.children[child_index]);
    }
    if (child_index == 0) {
        if (!dragParent.childElementCount && (!dragParentClose || !dragParentClose.childElementCount)) {
            dragParent.style.width = ("80px")
            dragParent.style.height = ("120px")
            dragParent.addEventListener("dragover", (e) => ondragover(e))
            dragParent.addEventListener("dragstart", (e) => ondragstart(e))
            dragParent.addEventListener("drop", (e) => ondrop(e))
        }
        else if (dragParentClose) {
            dragParent.appendChild(dragParentClose.lastElementChild)
            openAnotherCard(dragParent)
        }
    }

}

function ondropOpenCard(dragId, updateDropColumn1, updateDropColumn2) {//drop card from deck
    let column = document.getElementById(updateDropColumn2)
    let img = document.getElementById(dragId)
    column.appendChild(img)
    cardArray[dragId].column1 = updateDropColumn1
    cardArray[dragId].column2 = updateDropColumn2
    openDeckCard()

}

number = 7
function openAnotherCard(dragParent) {//turn over card
    let img = dragParent.lastElementChild;
    if (img) {
        img.src = shuffleCards[number].source;
        img.id = shuffleCards[number].id;
        img.addEventListener("click", (e) => jump(e))
        img.addEventListener("dragover", (e) => ondragover(e))
        img.addEventListener("dragstart", (e) => ondragstart(e))
        img.addEventListener("drop", (e) => ondrop(e))
        number++
    }
}

let count = 0;
function openDeckCard() {//pick up card
    
    let opencard = document.getElementById("open")
    if (opencard.childElementCount) {
        opencard.firstElementChild.remove();
    }
    if (count == deckCardArry.length) {
        count = 0
    }
    if(deckCardArry.length){
    if(count<deckCardArry.length){
    let imgUp = document.createElement("img")
    opencard.appendChild(imgUp)
    imgUp.src = deckCardArry[count].source
    imgUp.id = deckCardArry[count].id
    imgUp.addEventListener("click", (e) => jump(e))
    imgUp.addEventListener("dragover", (e) => ondragover(e))
    imgUp.addEventListener("dragstart", (e) => ondragstart(e))
    imgUp.addEventListener("drop", (e) => ondrop(e))
    count++
    }
    else{
        count = 0
    let imgUp = document.createElement("img")
    opencard.appendChild(imgUp)
    imgUp.src = deckCardArry[count].source
    imgUp.id = deckCardArry[count].id
    imgUp.addEventListener("click", (e) => jump(e))
    imgUp.addEventListener("dragover", (e) => ondragover(e))
    imgUp.addEventListener("dragstart", (e) => ondragstart(e))
    imgUp.addEventListener("drop", (e) => ondrop(e))
    count++
    }
}
}

function jump(e) { // jump up
    let shapeBlock = document.getElementById(cardArray[e.target.id].shape);
    let remove = document.getElementById(e.target.id)
    if (cardArray[e.target.id].number == 1 || (shapeBlock.children.length && cardArray[shapeBlock.lastElementChild.id].number + 1 == cardArray[e.target.id].number)) {
        score_plus()
        var audio = new Audio('../audio/320672__rhodesmas__win-01.wav');
        audio.play();
        let jumpParent = document.getElementById(cardArray[e.target.id].column2)
        let jumpParentclose = document.getElementById(cardArray[e.target.id].column1)
        
        if (cardArray[e.target.id].column2 == -1) {
            deckCardArry.splice(count - 1, 1);
        }
        else if(jumpParent.childElementCount==1){
            if (jumpParentclose&& jumpParentclose.childElementCount) {
                cardArray[shuffleCards[number].id].column1 = cardArray[e.target.id].column1
                cardArray[shuffleCards[number].id].column2 = cardArray[e.target.id].column2
                jumpParent.appendChild(jumpParentclose.lastElementChild)
                openAnotherCard(jumpParent)
            }
            else{
            jumpParent.style.width = ("80px")
            jumpParent.style.height = ("120px")
            jumpParent.addEventListener("dragover", (e) => ondragover(e))
            jumpParent.addEventListener("dragstart", (e) => ondragstart(e))
            jumpParent.addEventListener("drop", (e) => ondrop(e))
            }
        }
        if (shapeBlock.childElementCount) {
            shapeBlock.firstElementChild.remove();
            checkWin(e.target.id); 
        }
       shapeBlock.appendChild(remove)
       shapeBlock.lastElementChild.style.margin = "0"
    }
    
}

function newGame() {
    window.location = "game.html"
}

function menu() {
    window.location = "menu.html"
}

function rules() {
    window.location = "rules.html"
}

let countcards = 0
function checkWin(id) {
    if (cardArray[id].number == 13) {
        countcards++;
    } else {
        countcards = 0;
    }
    if (countcards == 4) {
        gameWin();
    }
}
function gameWin() {
    window.location = "gamewin.html"
}