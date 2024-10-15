function generateEasyPassword(length = 8) {
    if (length < 8 || length > 20) {
        throw new Error("Password length must be between 8 and 20 characters.");
    }

    const words = [
        "Sun", "Moon", "Star", "Sky", "Tree", "Leaf", "Truck", "Water", "Waste", "Trash",
        "Cloud", "Wind", "Fire", "Stone", "River", "Ocean", "Grass", "Flower", "Bird", "Night",
        "Mountain", "Field", "Snow", "Ice", "Dirt", "Root", "Fruit", "Seed", "Animal", "Frog",
        "Rain", "Fog", "Beach", "Earth", "Skyline", "Wave", "Rock", "Root", "Branch", "Nest",
        "Storm", "Shade", "Sunset", "Horizon", "Grove", "Meadow", "Stream", "Pond", "Cave", "Sand"
      ];
    const randomWord1 = words[Math.floor(Math.random() * words.length)];
    const randomWord2 = words[Math.floor(Math.random() * words.length)];
    const number = Math.floor(Math.random() * 100);
    const specialChars = "!@#$%^&*()_+";
    const special = specialChars[Math.floor(Math.random() * specialChars.length)];

    // Construct the initial password
    let password = `${randomWord1}${number}${special}${randomWord2}`;

    // Adjust length if necessary
    if (password.length < length) {
        while (password.length < length) {
            const randomChar = specialChars[Math.floor(Math.random() * specialChars.length)];
            password += randomChar;
        }
    } else {
        password = password.slice(0, length); // Ensure it fits the desired length
    }

    return password;
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
