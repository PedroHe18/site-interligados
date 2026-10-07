//ampliar e diminuir logo do cabeçalho
window.addEventListener('scroll', function() {
  const header = document.getElementById('meu-header');
  
  if (window.scrollY > 150) {
    header.classList.add('rolado');
  } else {
    header.classList.remove('rolado');
  }
})

//Expandir menu da sacola
const btnCarrinho = document.getElementById('btn-carrinho')
const carrinhoSidebar = document.getElementById('carrinho-sidebar')
const fecharCarrinho = document.getElementById ('fechar-carrinho')

btnCarrinho.addEventListener('click', () => {
  carrinhoSidebar.classList.add('aberto')
})

fecharCarrinho.addEventListener('click', () => {
  carrinhoSidebar.classList.remove('aberto')
})