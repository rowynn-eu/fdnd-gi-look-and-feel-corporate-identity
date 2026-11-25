// https://dev.to/am20dipi/how-to-build-a-simple-search-bar-in-javascript-4onf

// Geschreven door Krijn Hoetmer tijdens de les, Woensdag 25 nov

// Geen query paramaters omdat het later pas eraan komt.

// Stap 1. Definieer de zoek element
const iconSearch = document.querySelector("#searchIcon");

// Stap 2. Definieer de buttons met de iconen
const iconButtons = document.querySelectorAll("#overzicht li");

iconSearch.addEventListener('input', function(ev) {
    let searchText = this.value.toLowerCase();
    searchText = searchText.replace(' ', '');

    iconButtons.forEach(function(button) {
        button.hidden = !button.textContent.trim().toLowerCase().includes(searchText);
    })
})

iconSearch.closest('search').hidden = false;

// ********************************************************











// Stap 3. FUNCTIONS!
// Function 1) ga de text opschonen

// Stap 1 Maak de tekst lowercase
//.toLowerCase()

// Stap 2 Haal en vervang de witruimte eruit
//.replace(' ', '')

// Function 2) Filter de buttons voor de zoektermen

// Stap 1

// Function 4) URL Listener

// Stap 3a. If else statement + console dat de listener actief is ?

// Stap 3c: Maak alles lowercase, en haal de spaties weg

// Stap 3d: Komt 'q' overeen met de titel van een class of wat in het 'span element staat? 

// Stap 3e: Toon de iconen met de juiste title (q="aanmelden")

// Stap 4 Update de URL live met de invoer van de gebruiker per tik

// Stap 5 Toon in console dat het ook werkt?
