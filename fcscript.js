var flashcardsPool = [
    {term: "川", definition: "Chuān: River"}, {term: "雨", definition: "Yǔ: Rain"}, {term: "气", definition: "Qì: Air"},
    {term: "村", definition: "Cūn: Village"}, {term: "校", definition: "Xiào: School"}, {term: "火", definition: "Huǒ: Fire"},
    {term: "脚", definition: "Jiǎo: Foot"}, {term: "金", definition: "Jīn: Gold"}, {term: "玉", definition: "Yù: Jade"},
    {term: "喜", definition: "Xǐ: Happiness"}, {term: "马", definition: "Mǎ: Horse"}, {term: "狗", definition: "Gǒu: Dog"}
    , {term: "耳", definition: "Ěr: Ear"}, {term: "说", definition: "Shuō: Speak"}, {term: "猫", definition: "Māo: Cat"}
    , {term: "牛", definition: "Niú: Cattle"}, {term: "猪", definition: "Zhū: Pig"}, {term: "鸡", definition: "Jī: Chicken"}
    , {term: "肉", definition: "Ròu: Meat"}, {term: "黑", definition: "Hēi: Black"}, {term: "白", definition: "Bái: White"}
    , {term: "黄", definition: "Huáng: Yellow"}, {term: "千", definition: "Qiān: Thousand"}, {term: "百", definition: "Bǎi: Hundred"}
    , {term: "红", definition: "Hóng: Red"}, {term: "爱", definition: "Ài: Love"}
];

var flashcards = [];
var currentCardIndex = 0;
var flashcardElement = document.querySelector(".flashcard");
var termElement = document.querySelector(".term");
var definitionElement = document.querySelector(".definition");

function updateCard() {
var currentCard = flashcards[currentCardIndex];
if (currentCard) {
termElement.textContent = currentCard.term;
definitionElement.textContent = currentCard.definition;
} else {
newDeck()
}
}

function newDeck() {
flashcards = getRandomFlashcards();
currentCardIndex = 0;
definitionElement.style.display = "block";
var controlsElement = document.querySelector(".controls");
controlsElement.innerHTML = `

<button class="button" onclick="nextCard()">Next</button>
`;
updateCard();
}

// Call updateCard() at the end of newDeck() function
updateCard();




function nextCard() {
    currentCardIndex++;
    if (currentCardIndex >= flashcards.length) {
        currentCardIndex = 0;
        definitionElement.style.display = "block";
        var controlsElement = document.querySelector(".controls");
        controlsElement.innerHTML = `
            <button class="button" onclick="restart()">Restart</button>
            <button class="button" onclick="goHome()">Home</button>
            <button class="button" onclick="newDeck()">New</button>
        `;
    } else {
        
        definitionElement.style.display = "block";
        updateCard();
    }
}

function restart() {
    currentCardIndex = 0;
    definitionElement.style.display = "block";
    var controlsElement = document.querySelector(".controls");
    controlsElement.innerHTML = `
        <button class="button" onclick="nextCard()">Next</button>
    `;
    updateCard();
}

function goHome() {
    window.location.href = "index.html"; // Replace "index.html" with the home page URL
}


function getRandomFlashcards() {
var randomFlashcards = [];
var shuffledPool = shuffleArray(flashcardsPool);
var numFlashcards = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
for (var i = 0; i < numFlashcards; i++) {
randomFlashcards.push(shuffledPool[i]);
}
return randomFlashcards;
}


function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

updateCard();
