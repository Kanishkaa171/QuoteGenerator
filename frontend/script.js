const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const historyElement = document.getElementById("history");

// Fetch a random quote
async function generateQuote() {
    newQuoteBtn.disabled = true;
    newQuoteBtn.innerHTML = "Loading...";

    try {
        const response = await fetch("/api/quote");

        if (!response.ok) {
            throw new Error("Failed to fetch quote");
        }

        const data = await response.json();

        quoteElement.textContent = data.quote;
        authorElement.textContent = `— ${data.author}`;

        await loadHistory();

    } catch (error) {
        quoteElement.textContent = "Unable to load quote. Please try again.";
        authorElement.textContent = "";
        console.error(error);

    } finally {
        newQuoteBtn.disabled = false;
        newQuoteBtn.innerHTML = "✦ Generate New Quote";
    }
}


// Load saved quote history
async function loadHistory() {
    try {
        const response = await fetch("/api/history");

        if (!response.ok) {
            throw new Error("Failed to load history");
        }

        const quotes = await response.json();

        historyElement.innerHTML = "";

        if (quotes.length === 0) {
            historyElement.innerHTML =
                '<p class="empty-message">Your saved quotes will appear here.</p>';
            return;
        }

        quotes.forEach(item => {
            const card = document.createElement("div");
            card.className = "history-item";

            const quote = document.createElement("p");
            quote.textContent = `“${item.quote}”`;

            const author = document.createElement("span");
            author.textContent = `— ${item.author}`;

            card.appendChild(quote);
            card.appendChild(author);

            historyElement.appendChild(card);
        });

    } catch (error) {
        console.error("History error:", error);
        historyElement.textContent = "Unable to load quote history.";
    }
}


// Button event
newQuoteBtn.addEventListener("click", generateQuote);


// Load history when website opens
loadHistory();
