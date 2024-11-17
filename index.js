function rolldice() {
    const nodice = document.getElementById("dice").value;
    const res = document.getElementById("dicere");
    const diceimg = document.getElementById("dicimg");
    const val = [];
    const img = [];

    for (let i = 0; i < nodice; i++) {
        const value = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
        val.push(value);
        img.push(`<img src="dice_images/${value}.png" alt="dice ${value}">`); // Correct path
    }

    res.textContent = `Dice: ${val.join(', ')}`; // Show rolled values
    diceimg.innerHTML = img.join(''); // Display dice images
}
