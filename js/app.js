let nomeAmigo = document.getElementById(`nome-amigo`);
let listaAmigos = document.getElementById(`lista-amigos`);
let listaSorteio = document.getElementById(`lista-sorteio`);
let sorteio = [];

function adicionar() {
    if (nomeAmigo.value == ``) {
        alert(`É necessário informar o nome do amigo.`);
        return;
    }

    if (sorteio.includes(nomeAmigo.value.toUpperCase())) {
        alert(`O nome ${nomeAmigo.value} já foi adicionado.`);
        nomeAmigo.value = ``;
        nomeAmigo.placeholder = `Nome do amigo`;
        return;
    }

    if (listaAmigos.textContent == ``) {
        listaAmigos.textContent = nomeAmigo.value;    
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ` - ${nomeAmigo.value}`;
    }
    sorteio.push(nomeAmigo.value.toUpperCase());
    nomeAmigo.value = ``;
    nomeAmigo.placeholder = `Nome do amigo`;
}

function sortear() {
    if (sorteio.length < 4) {
        alert(`O número mínimo de participantes é 4.`);
        return;
    }

    embaralha(sorteio);

    for (let i = 0; i < sorteio.length; i++) {
        if (i == sorteio.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + toTitleCase(sorteio[i]) + ' --> ' + toTitleCase(sorteio[0]) + '<br>'
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + toTitleCase(sorteio[i]) + ' --> ' + toTitleCase(sorteio[i + 1]) + '<br>'
        }
    }
}

function reiniciar() {
    sorteio = [];
    listaAmigos.textContent = ``;
    nomeAmigo.value = ``;
    nomeAmigo.placeholder = `Nome do amigo`;
    listaSorteio.innerHTML = ``;
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }