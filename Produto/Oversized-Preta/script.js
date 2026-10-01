// Ampliar e diminuir logo do cabeçalho
window.addEventListener('scroll', function() {
  const header = document.getElementById('meu-header');
  
  if (window.scrollY > 150) {
    header.classList.add('rolado');
  } else {
    header.classList.remove('rolado');
  }
})

// Expandir menu da sacola
const btnCarrinho = document.getElementById('btn-carrinho')
const carrinhoSidebar = document.getElementById('carrinho-sidebar')
const fecharCarrinho = document.getElementById ('fechar-carrinho')

btnCarrinho.addEventListener('click', () => {
  carrinhoSidebar.classList.add('aberto')
})

fecharCarrinho.addEventListener('click', () => {
  carrinhoSidebar.classList.remove('aberto')
})

// Troca de Imagens

function mudarImagem(miniaturas) {
  const imgZoom = document.getElementById('img-zoom');

  if (imgZoom.src === miniaturas.src) return;

  let thumbs = document.querySelectorAll('.thumb');
  thumbs.forEach(t => t.classList.remove('active'));
  miniaturas.classList.add('active');

  imgZoom.classList.add('saindo');
  
  setTimeout(() => {
    imgZoom.src = miniaturas.src;
    imgZoom.classList.remove('saindo');
    imgZoom.classList.add('entrando');

    setTimeout(() => {
      imgZoom.classList.remove('entrando');
    }, 20);
  }, 250);
}