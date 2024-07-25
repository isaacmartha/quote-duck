const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The purpose of our lives is to be happy.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Believe you can and you're halfway there.",
    "The only impossible journey is the one you never begin.",
    "Life is short, and it's up to you to make it sweet.",
    "Life itself is the most wonderful fairy tale.",
    "Do not let making a living prevent you from making a life.",
    "Turn your wounds into wisdom.",
    "The way to get started is to quit talking and begin doing.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "It is better to fail in originality than to succeed in imitation.",
    "The road to success and the road to failure are almost exactly the same.",
    "Success usually comes to those who are too busy to be looking for it.",
    "I find that the harder I work, the more luck I seem to have.",
    "Don't be afraid to give up the good to go for the great.",
    "I attribute my success to this: I never gave or took any excuse.",
    "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "Stop chasing the money and start chasing the passion.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "The only place where success comes before work is in the dictionary.",
    "If you really look closely, most overnight successes took a long time.",
    "The real test is not whether you avoid this failure, because you won’t. It’s whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."
];


function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function replaceRandomWordWithDuck(quote) {
    const words = quote.split(" ");
    const randomIndex = Math.floor(Math.random() * words.length);
    words[randomIndex] = "duck";
    return words.join(" ");
}

function fetchRandomDuckImage() {
    const timestamp = new Date().getTime();
    return `https://www.random-d.uk/api/randomimg?t=${timestamp}`;
}

function showRandomDuckQuote() {
    const randomQuote = getRandomElement(quotes);
    const modifiedQuote = replaceRandomWordWithDuck(randomQuote);
    const randomDuckImage = fetchRandomDuckImage();

    document.getElementById("quote").textContent = modifiedQuote;
    const duckImageElement = document.getElementById("duckImage");
    duckImageElement.src = randomDuckImage;
    duckImageElement.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generateButton").addEventListener("click", showRandomDuckQuote);

    // Initialize with a random duck quote and image when the page loads
    showRandomDuckQuote();
});
