let apiQuotes = [];
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

// Show New Quote
function newQuote() {
  // Pick random quote
  const idx = Math.floor(Math.random() * apiQuotes.length);
  const quote = apiQuotes[idx];

  authorText.textContent = quote.author ? quote.author : "Unkown";

  // check quote length
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote');
  } else {
    quoteText.classList.remove('long-quote');
  }

  quoteText.textContent = quote.text;
}

// Get Quotes From API
async function fetchQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    console.log(error);
  }
}

// On Load
document.addEventListener("DOMContentLoaded", function () {
  fetchQuotes();
});
