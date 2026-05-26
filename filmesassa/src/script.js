const db = [
    // FILMES
    { id: 1, title: "Oppenheimer", type: "movie", genre: "Drama", rating: "9.1", img: "https://via.placeholder.com/400x250/111/00d2ff?text=Oppenheimer" },
    { id: 2, title: "Duna: Parte 2", type: "movie", genre: "Sci-Fi", rating: "8.9", img: "https://via.placeholder.com/400x250/111/00d2ff?text=Dune+2" },
    { id: 3, title: "John Wick 4", type: "movie", genre: "Ação", rating: "8.2", img: "https://via.placeholder.com/400x250/111/00d2ff?text=John+Wick" },
    { id: 4, title: "Spiderman: Across", type: "movie", genre: "Animação", rating: "9.0", img: "https://via.placeholder.com/400x250/111/00d2ff?text=Spiderman" },
    
    // FUTEBOL
    { id: 5, title: "Real Madrid vs Man. City", type: "football", genre: "Champions League", rating: "LIVE", img: "https://via.placeholder.com/400x250/111/39ff14?text=Champions+League" },
    { id: 6, title: "Brasil vs Argentina", type: "football", genre: "Eliminatórias", rating: "Replay", img: "https://via.placeholder.com/400x250/111/39ff14?text=Brasil+x+Arg" },
    { id: 7, title: "Liverpool vs Arsenal", type: "football", genre: "Premier League", rating: "90'", img: "https://via.placeholder.com/400x250/111/39ff14?text=Premier+League" },
    { id: 8, title: "Flamengo vs Palmeiras", type: "football", genre: "Brasileirão", rating: "Highlights", img: "https://via.placeholder.com/400x250/111/39ff14?text=Brasileirao" },
    { id: 9, title: "Final da Libertadores", type: "football", genre: "Copa Libertadores", rating: "Full Match", img: "https://via.placeholder.com/400x250/111/39ff14?text=Libertadores" }
];

const mainGrid = document.getElementById('mainGrid');
const navItems = document.querySelectorAll('.nav-item');
const mainSearch = document.getElementById('mainSearch');

function renderContent(filterType = 'all', searchTerm = '') {
    mainGrid.innerHTML = '';

    const filtered = db.filter(item => {
        const matchesType = filterType === 'all' || item.type === filterType;
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesType && matchesSearch;
    });

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <span class="badge ${item.type === 'movie' ? 'type-movie' : 'type-football'}">
                ${item.type === 'movie' ? 'Filme' : 'Futebol'}
            </span>
            <div class="item-info">
                <h3>${item.title}</h3>
                <p style="font-size: 0.8rem; color: #888;">${item.genre} • ${item.rating}</p>
            </div>
        `;
        mainGrid.appendChild(card);
    });
}

// Eventos de Navegação
navItems.forEach(btn => {
    btn.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        btn.classList.add('active');
        renderContent(btn.dataset.type);
    });
});

// Evento de Busca
mainSearch.addEventListener('input', (e) => {
    const activeType = document.querySelector('.nav-item.active').dataset.type;
    renderContent(activeType, e.target.value);
});

// Início
renderContent();