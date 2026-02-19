let notas = []; // armazena todas as notas

function adicionarNota () {
  let input = document.getElementById('nota');
  let valor = Number(input.value);

  if(valor === '' || isNaN(valor)){
    alert("Digite uma nota válida");
    return;
    }

notas.push(valor);

atualizarLista();
input.value = '';

}

function atualizarLista() {
  let lista = document.getElementById('notas');
  lista.innerHTML = '';

  for (let i = 0; i < notas.length; i++) {
    let item = document.createElement('li');
    item.textContent = `Nota: ${notas[i]}`;

    item.onclick = function () {
      notas.splice(i, 1);
      atualizarLista();
    } 
    lista.appendChild(item);
  }
}

function calcularMedia() {
  if(notas.length === 0) {
    alert("Adicione pelo menos uma nota!");
    return;
  }

  let somatorioNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somatorioNotas += notas[i];
  }

  let media = somatorioNotas / notas.length;
  const resultado = document.getElementById('resultado');

  if (media >= 6) {
    resultado.textContent = `Média: ${media.toFixed(2)} → Aprovada`;
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Média: ${media.toFixed(2)} → Reprovada`;
    resultado.style.color = "red";
  }

  // limpa tudo após mostrar o resultado
  notas = [];
  document.getElementById('notas').innerHTML = '';
}

function resetarNota() {
  notas = [];
  atualizarLista(); 
  document.getElementById('resultado').textContent = '';
  document.getElementById('nota').value = '';
}
