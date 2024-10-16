function onGenerateButtonClick() {
    const length = parseInt(document.getElementById('length').value);
    if (length < 8 || length > 20) {
        alert('Password length must be between 8 and 20 characters.');
        return;
    }
    const passwords = generatePasswords(length, 5); // Generate 5 passwords
    document.getElementById('result').innerText = passwords.join('\n'); // Display passwords
}

function generatePasswords(length, count) {
    const passwords = new Set(); // Use a Set to avoid duplicates
    while (passwords.size < count) {
        const password = generateWordLikePassword(length);
        passwords.add(password);
    }
    return Array.from(passwords);
}

function generateWordLikePassword(length) {
    const words = [
        "Sun", "Moon", "Star", "Sky", "Tree", "Leaf",
        "Cloud", "Ocean", "River", "Mountain", "Valley", 
        "Flower", "Plant", "Grass", "Stone", "Earth", 
        "Fire", "Wind", "Rain", "Thunder", "Lightning", 
        "Frost", "Snow", "Desert", "Forest", "Field", 
        "Meadow", "Stream", "Lake", "Beach", "Wave", 
        "Sunrise", "Sunset", "Dawn", "Dusk", "Night",
        "Galaxy", "Nebula", "Comet", "Meteor", "Planet",
        "Asteroid", "Cosmos", "Universe", "Skyline", "Horizon",
        "Bird", "Insect", "Animal", "Fish", "Wildflower",
        "Seed", "Root", "Bark", "Branch", "Canopy",
        "Pond", "Swamp", "Cave", "Cliff", "Grove",
        "Terrain", "Plateau", "Canyon", "Archipelago", "Isle",
        "Twilight", "Eclipse", "Aurora", "Zephyr", "Breeze",
        "Tide", "Current", "Flood", "Drought", "Harvest",
        "Bloom", "Decay", "Cycle", "Nature", "Ecosystem"
    ];
    
    const specialCharacters = '!@#$%&+;:,.?'; // Define special characters

    let password = '';
    
    // Create a basic structure by concatenating words
    while (password.length < length - 1) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        password += randomWord;
    }

    // Trim or slice to ensure the correct length and add a special character
    password = password.slice(0, length - 1);

    // Add a special character at a random position
    const randomSpecialChar = specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length));
    const insertPosition = Math.floor(Math.random() * password.length);
    password = password.slice(0, insertPosition) + randomSpecialChar + password.slice(insertPosition);

    return password;
}
