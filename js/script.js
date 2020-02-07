const API_KEY = "2c86f26de41447e2b29ed3a0574c721e";
let cardsLinha = document.getElementById("cards-linha");
let btnCarregar = document.getElementById("carregar");

let config = {
    method: "GET",
}


function mostrarNaTela(listaNoticias) {
    listaNoticias.forEach(noticia => {
        let noticiaNova =   `<div class = "card column col-lg-4">
                                <img class = "card-img" src = "${noticia.urlToImage}" alt = "Imagem da notícia" title = "Imagem da notícia" width="" height=""/>
                                <h3 class = "text-center"> ${noticia.title} </h3>
                                <div class = "card-body text-justify">
                                    ${noticia.description}
                                </div>
                            </div>`;

        cardsLinha.insertAdjacentHTML("beforeend", noticiaNova);
        console.log(noticiaNova)
    });
}

btnCarregar.onclick = () => {
    let resposta = fetch("https://newsapi.org/v2/top-headlines?country=br&apiKey=" + API_KEY, config)
    .then((resposta) => {
        return resposta.json();
    })
    .then((json) => {
        console.log(json.articles[0]);
        mostrarNaTela(json.articles);
    })
}

/*"url = action"*/


// montar solicitação para algum servidor
// de onde vamos pedir ou para onde vamos enviar as informações
// end point = url