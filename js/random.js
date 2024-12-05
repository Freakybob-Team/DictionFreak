function showRandomWord() {
    const words = ['greg', 'freaky'];
    const randomWord = words[Math.floor(Math.random() * words.length)];
    window.location.href = `words/${randomWord}.html`;
}
