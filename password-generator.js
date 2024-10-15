function generateEasyPassword(length = 8) {
    if (length < 8) {
        throw new Error("Password length must be at least 8 characters.");
    }

    const words = ["Sun", "Moon", "Star", "Sky", "Tree", "Leaf"];
    const randomWord1 = words[Math.floor(Math.random() * words.length)];
    const randomWord2 = words[Math.floor(Math.random() * words.length)];
    const number = Math.floor(Math.random() * 100);
    const specialChars = "!@#$%^&*()_+";
    const special = specialChars[Math.floor(Math.random() * specialChars.length)];

    // Construct the password
    const password = `${randomWord1}${number}${special}${randomWord2}`;
    
    return password.slice(0, length); // Ensure it fits the desired length
}

function onGenerateButtonClick() {
    const lengthInput = document.getElementById("length").value;
    const length = parseInt(lengthInput, 10);
    try {
        const password = generateEasyPassword(length);
        document.getElementById("result").innerText = "Generated Password: " + password;
    } catch (error) {
        alert(error.message);
    }
}
