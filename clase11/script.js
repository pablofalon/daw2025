const form = document.getElementById('searchForm');
const charactersDiv = document.getElementById('results');
const errorDiv = document.getElementById('error');
const getAllBtn = document.getElementById('getAllBtn');
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click',function(e){
    charactersDiv.innerHTML = '';
})

getAllBtn.addEventListener('click', () => {
    fetchCharacters('https://rickandmortyapi.com/api/character');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const species = document.getElementById('species').value;
    const type = document.getElementById('type').value;
    const gender = document.getElementById('gender').value;

    const query = new URLSearchParams({ name, status, species, type, gender });
    fetchCharacters(`https://rickandmortyapi.com/api/character/?${query.toString()}`);
});

function drawListOfCharacters(characters) {
    charactersDiv.innerHTML = '';
    errorDiv.textContent = '';
    characters.forEach(char => {
        const charDiv = document.createElement('div');
        charDiv.className = 'character';
        charDiv.innerHTML = `
          <h3>${char.name}</h3>
          <img src="${char.image}" alt="${char.name}" class="img-character">
          <p>Status: ${char.status}</p>
          <p>Species: ${char.species}</p>
          <p>Type: ${char.type}</p>
          <p>Gender: ${char.gender}</p>
        `;
        charactersDiv.appendChild(charDiv);
    });
}

async function fetchCharacters(url) {
    try {
        const res = await fetch(url);
        if (res.status == 404) throw new Error('No se encontraron resultados');
        const data = await res.json();
        drawListOfCharacters(data.results);
    } catch (err) {
        charactersDiv.innerHTML = '';
        errorDiv.textContent = err.message;
    }
}



