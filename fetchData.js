const fs = require('fs');

async function fetchStarWarsData() {
    let allCharacters = [];
    let url = 'https://swapi.dev/api/people/';

    console.log("Fetching characters... this will take a minute to resolve all URLs");

    while (url) {
        const response = await fetch(url);
        const data = await response.json();

        for (let char of data.results) {
            const hwResponse = await fetch(char.homeworld);
            const hwData = await hwResponse.json();

            let speciesName = "Human";
            if (char.species.length > 0) {
                const speciesResponse = await fetch(char.species[0]);
                const speciesData = await speciesResponse.json();
                speciesName = speciesData.name;
            }

            allCharacters.push({
                name: char.name,
                species: speciesName,
                world: hwData.name,
                affiliation: [] 

            });
        }

        url = data.next;
    }

    fs.writeFileSync('characters.json', JSON.stringify(allCharacters, null, 2));
    console.log(`Saved ${allCharacters.length} characters to characters.json!`);
}

fetchStarWarsData();