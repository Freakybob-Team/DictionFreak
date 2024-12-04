// Welcome to Wordswork.js
// A file made by the Freakybob Team to detect input and redirect to a page based on said input
// Please give credit! <3
// - freakybobsite@proton.me or @freakybob.site on bluesky
function sendWord() {
    word = document.getElementById("word")
    wvalue = word.value
    console.log("value: " + wvalue)
    console.log("Function called. Name: sendWord()")
    window.location.replace("words/" + wvalue + ".html");
    console.log("Redirected!")
}