//aparecer a imagem dos filmes favoritos na nossa tela
let listaFilmes = []

function compartilhar() {
    let filmeCompartilhado = document.getElementById ("url").value;
    if (filmeCompartilhado.endsWith(".jpg")) { listarFilmesNaTela(filmeCompartilhado)
    } else {
      alert("Endereço de Filme Inválido")
    }
    document.getElementById ("url").value = ""
  }
  
  function listarFilmesNaTela(filme) {
    let elementoFilmeFavorito = "<img src=" + filme + ">"
    let elementoListaFilmes = document.getElementById("compartilhados")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito
  }

  function adicionarNome() {
    let filmeAdicionado = document.getElementById ("nomeFilme").value;
    let nomeFilme = document.getElementById("adicionados")
    nomeFilme.innerHTML = nomeFilme.innerHTML + filmeAdicionado
    document.getElementById ("nomeFilme").value = ""
  }