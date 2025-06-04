const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const prevBtn = document.getElementById('prev-quote');
const nextBtn = document.getElementById('next-quote');

// Define your quotes as an array of objects
const quotes = [
  { quote: "Be kind, for everyone you meet is fighting a hard battle." ,author: "Plato"},
  { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller" },
  { quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { quote: "There is nothing impossible to him who will try.", author: "Alexander the Great" },
  { quote: "The only limit to our realization of tomorrow will be the doubts of today." ,author: "Franklin D. Roosevelt"},
  { quote: "Its never too late to be what you might have been." ,author: "Gorge Eliot" },
  { quote: "Don't let your happiness depend on something you may lose." ,author: "C.S. Lewis"},
  { quote: "To live is the rarest thing in the world. most people exist,thats all." ,author: "Oscar Wilde" },
  { quote: "Either write something worth reading or do something worth writing." ,author: "Benjamin Franklin"},
  { quote: "Anyone who has never made a mistake has never tried." ,author: "Albert Einstein"}
  // Add more quotes here
];

// Global variable to track current quote index
let currentQuoteIndex = 0;

// Function to display the current quote
function displayQuote() {
  const quote = quotes[currentQuoteIndex];
  quoteText.textContent = quote.quote;
  authorText.textContent = "- " + quote.author;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
  currentQuoteIndex--;
  if (currentQuoteIndex < 0) {
    currentQuoteIndex = quotes.length - 1;
  }
  displayQuote();
});

nextBtn.addEventListener('click', () => {
  currentQuoteIndex++;
  if (currentQuoteIndex >= quotes.length) {
    currentQuoteIndex = 0;
  }
  displayQuote();
});

// Display the initial quote
displayQuote();

// Optional: Add functionality for automatic quote cycling using setInterval
// setInterval(function() {
//   nextBtn.click(); // Simulate clicking next button
// }, 10000); // Change 10000 to desired interval in milliseconds