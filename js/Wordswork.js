// Welcome to Wordswork.js
// A file made by the Freakybob Team to detect input and redirect to a page based on said input
// Please give credit! <3
// - freakybobsite@proton.me or @freakybob.site on bluesky
function sendWord() {
    const word = document.getElementById("word");
    const wvalue = word.value.trim();
    const resultsDiv = document.getElementById("nf");
    const url = `words/${wvalue.toLowerCase()}.html`;

    if (!wvalue) {
        resultsDiv.textContent = "Please enter a word to look up.";
        return;
    }

    console.log("Value: " + wvalue);
    console.log("Function called. Name: sendWord()");

    fetch(url, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                console.log("Redirecting!");
                window.location.replace(url);
            } else {
                console.log("Page not found.");
                resultsDiv.textContent = `No entry found for "${wvalue}". Please try another word.`;
            }
        })
        .catch(error => {
            console.error("Error checking page:", error);
            resultsDiv.textContent = "An error occurred. Please try again later.";
        });
}
