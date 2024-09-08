function searchData() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    
    let searchInput = document.getElementById("search").value;

    // se campoPesquisa for uma string sem nada
    if (!searchInput) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return;
    }

    searchInput = searchInput.toLowerCase();
    
    // Inicializa uma string vazia para armazenar os resultados
    let results = "";
    let titulo = ""; 
    let descricao = "";

    // Itera sobre cada dado da lista de dados
    for (let nutrient of nutrients) {
        titulo = nutrient.vitamina.toLowerCase();
        descricao = nutrient.beneficios.toLowerCase();
        // se titulo includes campoPesquisa
        if (titulo.includes(searchInput) || descricao.includes(searchInput)) {
            // cria um novo elemento
        results += `
            <div class="card">
                <h2>
                    <a href="#" target="_blank">${nutrient.vitamina}</a>
                </h2>
                <h3>Benefícios:</h3>
                <p class="descricao-meta">${nutrient.beneficios}</p>
                <h3>Fontes:</h3>
                <p class="descricao-meta">${nutrient.fontes.join(", ")}</p>
        
            </div>            
        `;
    }
    }
    if (!results) {
        results = "<p>Nada foi encontrado</p>"
    }
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = results;
}
