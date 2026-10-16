const characters = [
  {
    "name": "Luke Skywalker",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Jedi Order", "Rebel Alliance", "New Republic"]
  },
  {
    "name": "C-3PO",
    "species": "Droid",
    "world": "Tatooine",
    "affiliation": ["Galactic Republic", "Rebel Alliance", "Resistance"]
  },
  {
    "name": "R2-D2",
    "species": "Droid",
    "world": "Naboo",
    "affiliation": ["Galactic Republic", "Rebel Alliance", "Resistance"]
  },
  {
    "name": "Darth Vader",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Sith", "Galactic Empire"]
  },
  {
    "name": "Leia Organa",
    "species": "Human",
    "world": "Alderaan",
    "affiliation": ["Galactic Republic", "Rebel Alliance", "New Republic", "Resistance"]
  },
  {
    "name": "Owen Lars",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Beru Whitesun lars",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Civilian"]
  },
  {
    "name": "R5-D4",
    "species": "Droid",
    "world": "Tatooine",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Biggs Darklighter",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Obi-Wan Kenobi",
    "species": "Human",
    "world": "Stewjon",
    "affiliation": ["Jedi Order", "Galactic Republic", "Rebel Alliance"]
  },
  {
    "name": "Anakin Skywalker",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Wilhuff Tarkin",
    "species": "Human",
    "world": "Eriadu",
    "affiliation": ["Galactic Republic", "Galactic Empire"]
  },
  {
    "name": "Chewbacca",
    "species": "Wookie",
    "world": "Kashyyyk",
    "affiliation": ["Galactic Republic", "Rebel Alliance", "Resistance"]
  },
  {
    "name": "Han Solo",
    "species": "Human",
    "world": "Corellia",
    "affiliation": ["Criminal Underworld", "Rebel Alliance", "Resistance"]
  },
  {
    "name": "Greedo",
    "species": "Rodian",
    "world": "Rodia",
    "affiliation": ["Bounty Hunter", "Criminal Underworld"]
  },
  {
    "name": "Jabba Desilijic Tiure",
    "species": "Hutt",
    "world": "Nal Hutta",
    "affiliation": ["Criminal Underworld"]
  },
  {
    "name": "Wedge Antilles",
    "species": "Human",
    "world": "Corellia",
    "affiliation": ["Rebel Alliance", "New Republic"]
  },
  {
    "name": "Jek Tono Porkins",
    "species": "Human",
    "world": "Bestine IV",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Yoda",
    "species": "Yoda's species",
    "world": "unknown",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Palpatine",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Sith", "Galactic Republic", "Galactic Empire"]
  },
  {
    "name": "Boba Fett",
    "species": "Human",
    "world": "Kamino",
    "affiliation": ["Bounty Hunter", "Galactic Empire", "Criminal Underworld"]
  },
  {
    "name": "IG-88",
    "species": "Droid",
    "world": "unknown",
    "affiliation": ["Bounty Hunter"]
  },
  {
    "name": "Bossk",
    "species": "Trandoshan",
    "world": "Trandosha",
    "affiliation": ["Bounty Hunter"]
  },
  {
    "name": "Lando Calrissian",
    "species": "Human",
    "world": "Socorro",
    "affiliation": ["Criminal Underworld", "Rebel Alliance", "New Republic"]
  },
  {
    "name": "Lobot",
    "species": "Human",
    "world": "Bespin",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Ackbar",
    "species": "Mon Calamari",
    "world": "Mon Cala",
    "affiliation": ["Rebel Alliance", "New Republic", "Resistance"]
  },
  {
    "name": "Mon Mothma",
    "species": "Human",
    "world": "Chandrila",
    "affiliation": ["Galactic Republic", "Rebel Alliance", "New Republic"]
  },
  {
    "name": "Arvel Crynyd",
    "species": "Human",
    "world": "unknown",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Wicket Systri Warrick",
    "species": "Ewok",
    "world": "Endor",
    "affiliation": ["Rebel Alliance"]
  },
  {
    "name": "Nien Nunb",
    "species": "Sullustan",
    "world": "Sullust",
    "affiliation": ["Rebel Alliance", "Resistance"]
  },
  {
    "name": "Qui-Gon Jinn",
    "species": "Human",
    "world": "unknown",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Nute Gunray",
    "species": "Neimodian",
    "world": "Cato Neimoidia",
    "affiliation": ["Trade Federation", "Separatists"]
  },
  {
    "name": "Finis Valorum",
    "species": "Human",
    "world": "Coruscant",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Padmé Amidala",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Jar Jar Binks",
    "species": "Gungan",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Roos Tarpals",
    "species": "Gungan",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Rugor Nass",
    "species": "Gungan",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Ric Olié",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Watto",
    "species": "Toydarian",
    "world": "Toydaria",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Sebulba",
    "species": "Dug",
    "world": "Malastare",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Quarsh Panaka",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic", "Galactic Empire"]
  },
  {
    "name": "Shmi Skywalker",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Darth Maul",
    "species": "Zabrak",
    "world": "Dathomir",
    "affiliation": ["Sith", "Criminal Underworld"]
  },
  {
    "name": "Bib Fortuna",
    "species": "Twi'lek",
    "world": "Ryloth",
    "affiliation": ["Criminal Underworld"]
  },
  {
    "name": "Ayla Secura",
    "species": "Twi'lek",
    "world": "Ryloth",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Ratts Tyerel",
    "species": "Aleena",
    "world": "Aleen Minor",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Dud Bolt",
    "species": "Vulptereen",
    "world": "Vulpter",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Gasgano",
    "species": "Xexto",
    "world": "Troiken",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Ben Quadinaros",
    "species": "Toong",
    "world": "Tund",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Mace Windu",
    "species": "Human",
    "world": "Haruun Kal",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Ki-Adi-Mundi",
    "species": "Cerean",
    "world": "Cerea",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Kit Fisto",
    "species": "Nautolan",
    "world": "Glee Anselm",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Eeth Koth",
    "species": "Zabrak",
    "world": "Iridonia",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Adi Gallia",
    "species": "Tholothian",
    "world": "Coruscant",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Saesee Tiin",
    "species": "Iktotchi",
    "world": "Iktotch",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Yarael Poof",
    "species": "Quermian",
    "world": "Quermia",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Plo Koon",
    "species": "Kel Dor",
    "world": "Dorin",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Mas Amedda",
    "species": "Chagrian",
    "world": "Champala",
    "affiliation": ["Galactic Republic", "Galactic Empire"]
  },
  {
    "name": "Gregar Typho",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Cordé",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Cliegg Lars",
    "species": "Human",
    "world": "Tatooine",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Poggle the Lesser",
    "species": "Geonosian",
    "world": "Geonosis",
    "affiliation": ["Separatists"]
  },
  {
    "name": "Luminara Unduli",
    "species": "Mirialan",
    "world": "Mirial",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Barriss Offee",
    "species": "Mirialan",
    "world": "Mirial",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Dormé",
    "species": "Human",
    "world": "Naboo",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Dooku",
    "species": "Human",
    "world": "Serenno",
    "affiliation": ["Sith", "Separatists"]
  },
  {
    "name": "Bail Prestor Organa",
    "species": "Human",
    "world": "Alderaan",
    "affiliation": ["Galactic Republic", "Rebel Alliance"]
  },
  {
    "name": "Jango Fett",
    "species": "Human",
    "world": "Concord Dawn",
    "affiliation": ["Bounty Hunter", "Separatists"]
  },
  {
    "name": "Zam Wesell",
    "species": "Clawdite",
    "world": "Zolan",
    "affiliation": ["Bounty Hunter"]
  },
  {
    "name": "Dexter Jettster",
    "species": "Besalisk",
    "world": "Ojom",
    "affiliation": ["Civilian"]
  },
  {
    "name": "Lama Su",
    "species": "Kaminoan",
    "world": "Kamino",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Taun We",
    "species": "Kaminoan",
    "world": "Kamino",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Jocasta Nu",
    "species": "Human",
    "world": "Coruscant",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "R4-P17",
    "species": "Human",
    "world": "unknown",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Wat Tambor",
    "species": "Skakoan",
    "world": "Skako",
    "affiliation": ["Separatists"]
  },
  {
    "name": "San Hill",
    "species": "Muun",
    "world": "Muunilinst",
    "affiliation": ["Separatists"]
  },
  {
    "name": "Shaak Ti",
    "species": "Togruta",
    "world": "Shili",
    "affiliation": ["Jedi Order", "Galactic Republic"]
  },
  {
    "name": "Grievous",
    "species": "Kaleesh",
    "world": "Kalee",
    "affiliation": ["Separatists"]
  },
  {
    "name": "Tarfful",
    "species": "Wookie",
    "world": "Kashyyyk",
    "affiliation": ["Galactic Republic"]
  },
  {
    "name": "Raymus Antilles",
    "species": "Human",
    "world": "Alderaan",
    "affiliation": ["Galactic Republic", "Rebel Alliance"]
  },
  {
    "name": "Sly Moore",
    "species": "Human",
    "world": "Umbara",
    "affiliation": ["Galactic Republic", "Galactic Empire"]
  },
  {
    "name": "Tion Medon",
    "species": "Pau'an",
    "world": "Utapau",
    "affiliation": ["Galactic Republic"]
  }
];

// --- 1. DOM Elements ---
const dataList = document.getElementById('characterOptions');
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const grid = document.getElementById('grid');
const gameMessage = document.getElementById('gameMessage');
const autocompleteList = document.getElementById('autocomplete-list');
const hintButton = document.getElementById('hintButton');
const giveUpButton = document.getElementById('giveUpButton');
const hintDisplay = document.getElementById('hintDisplay');

guessInput.addEventListener('input', function() {
  const val = this.value;

  autocompleteList.innerHTML = '';
  if (!val) return;

  const matches = characters.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));

  matches.forEach(match => {
    const item = document.createElement('div');
    const regex = new RegExp(`(${val})`, "gi");
    item.innerHTML = match.name.replace(regex, "<strong>$1</strong>");

    item.addEventListener('click', function() {
      guessInput.value = match.name;
      autocompleteList.innerHTML = '';
    });

    autocompleteList.appendChild(item);
  });
});

document.addEventListener('click', function(e) {
  if (e.target !== guessInput) {
    autocompleteList.innerHTML = '';
  }
});

guessInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    guessButton.click()
  }
});


// --- 3. Daily Target Math (MUST come before save state) ---
const d = new Date();
const today = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

let hash = 0;
for (let i = 0; i < today.length; i++) {
    hash = today.charCodeAt(i) + ((hash << 5) - hash);
}

const targetIndex = Math.abs(hash) % characters.length;
const dailyTarget = characters[targetIndex];

// --- 4. LocalStorage & Game State ---
let savedState = JSON.parse(localStorage.getItem('starwarsdle-save'));

if (!savedState || savedState.date !== today) {
    savedState = {
        date: today,
        guesses: [],
        gaveUp: false
    };
    localStorage.setItem('starwarsdle-save', JSON.stringify(savedState));
}

// Rebuild grid on load
savedState.guesses.forEach(guessName => {
    const guessedCharacter = characters.find(c => c.name === guessName);
    if (guessedCharacter) {
        renderGuessRow(guessedCharacter);
    }
});

// Check if already won/lost today
if (savedState.gaveUp) {
  triggerLossState();
} else if (savedState.guesses.includes(dailyTarget.name)) {
  triggerWinState();
} else if (savedState.guesses.length >= 6) {
  triggerLossState();
}

// --- 5. Helper Functions ---
function compareArrays(guessArray, targetArray) {
    const overlap = guessArray.filter(val => targetArray.includes(val));

    if (overlap.length === targetArray.length && overlap.length === guessArray.length) {
        return 'green';
    } else if (overlap.length > 0) {
        return 'yellow';
    } else {
        return 'red';
    }
}

function renderGuessRow(guess) {
    const row = document.createElement('div');
    row.classList.add('guess-row');

    const attributes = [
        { value: guess.name, color: guess.name === dailyTarget.name ? 'green' : 'none' },
        { value: guess.species, color: guess.species === dailyTarget.species ? 'green' : 'red' },
        { value: guess.world, color: guess.world === dailyTarget.world ? 'green' : 'red' },
        { value: guess.affiliation.join(', '), color: compareArrays(guess.affiliation, dailyTarget.affiliation) }
    ];

    // FIX: Added 'index' to the parameter list
    attributes.forEach((attr, index) => {
        const box = document.createElement('div');
        box.classList.add('box');
        box.textContent = attr.value;
        row.appendChild(box);

        setTimeout(() => {
          box.classList.add('flip-half');
          setTimeout(() => {
            if (attr.color !== 'none') {
                box.classList.add(attr.color);
            }
            box.classList.remove('flip-half');
          }, 250);
        }, index * 300);
    });

    grid.prepend(row);
}

function triggerWinState() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInput.placeholder = "Great job!";
    
    gameMessage.textContent = `You found ${dailyTarget.name}!`;
    gameMessage.style.display = 'block';
}

function triggerLossState() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    guessInput.placeholder = "Game Over!";

    gameMessage.textContent = `Out of guesses! The answer was ${dailyTarget.name}.`;
    gameMessage.style.color = '#c62828';
    gameMessage.style.display = 'block';
}

// --- 6. Click Event Listener ---
guessButton.addEventListener('click', () => {
    const guessName = guessInput.value.trim().toLowerCase();
    const guessedCharacter = characters.find(c => c.name.toLowerCase() === guessName);

    // FIX: Missing bracket added so this check properly closes
    if (!guessedCharacter) {
        alert("Character not found in database! Try again.");
        return;
    }

    renderGuessRow(guessedCharacter);
    guessInput.value = '';

    savedState.guesses.push(guessedCharacter.name);
    localStorage.setItem('starwarsdle-save', JSON.stringify(savedState));

    // Determine win/loss for the current guess
    if (guessedCharacter.name === dailyTarget.name) {
        setTimeout(triggerWinState, 1500);
    } else if (savedState.guesses.length >= 6) {
        setTimeout(triggerLossState, 1500);
    }

    updateGameActions();
});

function updateGameActions() {
  const guessesCount = savedState.guesses.length;

  if (savedState.gaveUp || savedState.guesses.includes(dailyTarget.name) || guessesCount >= 6) {
    giveUpButton.style.display = 'none';
    hintButton.style.display = 'none';
    return;
  }

  if (guessesCount >= 3) {
    hintButton.style.display = 'inline-block';
  }
}

hintButton.addEventListener('click', () => {
  const guessesCount = savedState.guesses.length;

  // 1. Figure out which attributes are already "green"
  let knownSpecies = false;
  let knownWorld = false;
  let knownAffiliation = false;

  savedState.guesses.forEach(guessName => {
    const guess = characters.find(c => c.name === guessName);
    if (guess.species === dailyTarget.species) knownSpecies = true;
    if (guess.world === dailyTarget.world) knownWorld = true;
    if (compareArrays(guess.affiliation, dailyTarget.affiliation) === 'green') knownAffiliation = true;
  });

  // 2. Build a pool of hints using ONLY the unknown attributes
  const dynamicHints = [];
  if (!knownSpecies) dynamicHints.push(`Species: ${dailyTarget.species}`);
  if (!knownWorld) dynamicHints.push(`Homeworld: ${dailyTarget.world}`);
  if (!knownAffiliation) dynamicHints.push(`Affiliation: ${dailyTarget.affiliation.join(', ')}`);

  // 3. Always include these fallbacks in case they already guessed all 3 attributes above
  const letterCount = dailyTarget.name.replace(/[^a-zA-Z]/g, '').length;
  const wordCount = dailyTarget.name.split(' ').length;
  
  dynamicHints.push(`The character's name contains exactly ${letterCount} letters`);
  
  if (wordCount > 1) {
      dynamicHints.push(`The character's name consists of ${wordCount} words`);
  } else {
      dynamicHints.push(`The character's name is only a single word`);
  }

  // 4. Pick consistently based on the daily hash
  const hint1Index = Math.abs(hash) % dynamicHints.length;
  const hint2Index = (hint1Index + 1) % dynamicHints.length; // +1 ensures they don't get the same hint twice

  // 5. Display the hints
  if (guessesCount >= 5) {
    hintDisplay.innerHTML = `Hint 1: ${dynamicHints[hint1Index]}<br>Hint 2: ${dynamicHints[hint2Index]}`;
  }
  else if (guessesCount >= 3) {
    hintDisplay.textContent = `Hint 1: ${dynamicHints[hint1Index]}`;
  }
});

giveUpButton.addEventListener('click', () => {
  if (confirm("Are you sure you want to give up?")) {
    savedState.gaveUp = true;
    localStorage.setItem('starwarsdle-save', JSON.stringify(savedState));
    triggerLossState();
    updateGameActions();
    hintDisplay.textContent = "";
  }
});

updateGameActions();