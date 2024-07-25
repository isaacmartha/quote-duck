const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The way to get started is to quit talking and begin doing.",
    "Your time is limited, so don't waste it living someone else's life.",
    "If life were predictable it would cease to be life, and be without flavor."
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
