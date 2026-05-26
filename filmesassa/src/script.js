// ===============================
// ARRAY DE FILMES
// ===============================

const filmes = [
    {
        id: 1,
        titulo: "Interestelar",
        genero: ["Sci-Fi", "Drama"],
        ano: 2014,
        nota: 8.9,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
    },

    {
        id: 2,
        titulo: "Batman: O Cavaleiro das Trevas",
        genero: ["Ação", "Drama"],
        ano: 2008,
        nota: 9.0,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },

    {
        id: 3,
        titulo: "Vingadores: Ultimato",
        genero: ["Ação", "Sci-Fi"],
        ano: 2019,
        nota: 8.4,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
    },

    {
        id: 4,
        titulo: "Coringa",
        genero: ["Drama"],
        ano: 2019,
        nota: 8.5,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
    },

    {
        id: 5,
        titulo: "Invocação do Mal",
        genero: ["Terror"],
        ano: 2013,
        nota: 7.5,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
    },

    {
        id: 6,
        titulo: "Projeto X",
        genero: ["Comédia"],
        ano: 2012,
        nota: 6.7,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    },

    {
        id: 7,
        titulo: "Duna",
        genero: ["Sci-Fi", "Drama"],
        ano: 2021,
        nota: 8.1,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    },

    {
        id: 8,
        titulo: "John Wick",
        genero: ["Ação"],
        ano: 2014,
        nota: 7.9,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg"
    },

    {
        id: 9,
        titulo: "Hereditário",
        genero: ["Terror", "Drama"],
        ano: 2018,
        nota: 7.3,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/p9fmuz2Oj3HtEJEqbIwkFGUhVXD.jpg"
    },

    {
        id: 10,
        titulo: "Se Beber Não Case",
        genero: ["Comédia"],
        ano: 2009,
        nota: 7.7,
        imagem_url:
            "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg"
    }
];

// ===============================
// SELETORES
// ===============================

const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

// ===============================
// FUNÇÃO PARA MOSTRAR FILMES
// ===============================

function renderMovies(listaFilmes) {

    moviesContainer.innerHTML = "";

    listaFilmes.forEach((filme) => {

        const card = document.createElement("div");

        card.classList.add("movie-card");

        card.innerHTML = `
            <img src="${filme.imagem_url}" alt="${filme.titulo}">

            <div class="movie-info">

                <h2 class="movie-title">
                    ${filme.titulo}
                </h2>

                <div class="movie-meta">
                    <span>${filme.ano}</span>

                    <span class="movie-rating">
                        ⭐ ${filme.nota}
                    </span>
                </div>
            </div>
        `;

        moviesContainer.appendChild(card);
    });
}

// ===============================
// FILTRO POR GÊNERO
// ===============================

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active
        filterButtons.forEach((btn) =>
            btn.classList.remove("active")
        );

        // Adiciona active
        button.classList.add("active");

        const categoria = button.dataset.filter;

        // TODOS
        if (categoria === "Todos") {
            renderMovies(filmes);
            return;
        }

        // FILTRAR
        const filmesFiltrados = filmes.filter((filme) =>
            filme.genero.includes(categoria)
        );

        renderMovies(filmesFiltrados);
    });
});

// ===============================
// PESQUISA EM TEMPO REAL
// ===============================

searchInput.addEventListener("input", () => {

    const valor = searchInput.value.toLowerCase();

    const filmesFiltrados = filmes.filter((filme) =>
        filme.titulo.toLowerCase().includes(valor)
    );

    renderMovies(filmesFiltrados);
});

// ===============================
// INICIALIZAÇÃO
// ===============================

renderMovies(filmes);