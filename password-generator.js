function generateEasyPassword(length) {
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
    
    const passwords = [];
    
    for (let i = 0; i < 5; i++) {
        const randomWord1 = words[Math.floor(Math.random() * words.length)];
        const randomWord2 = words[Math.floor(Math.random() * words.length)];
        const number = Math.floor(Math.random() * 100);
        const specialChars = "!@#$%^&*()_+";
        const special = specialChars[Math.floor(Math.random() * specialChars.length)];

        // Construct the password
        let password = `${randomWord1}${number}${special}${randomWord2}`;
        
        // Ensure the password fits the desired length
        password = password.slice(0, length);
        
        // If the password is too short, pad with random characters
        while (password.length < length) {
            password += randomWord1.charAt(Math.floor(Math.random() * randomWord1.length));
        }
        
        passwords.push(password);
    }
    
    return passwords;
}

function onGenerateButtonClick() {
    const lengthInput = document.getElementById("length").value;
    const length = parseInt(lengthInput, 10);
    try {
        const passwords = generateEasyPassword(length);
        document.getElementById("result").innerText = "Generated Passwords:\n" + passwords.join('\n');
    } catch (error) {
        alert(error.message);
    }
}
