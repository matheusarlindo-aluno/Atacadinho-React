// import logo from './logo.svg';
import './Compra.css';
import carrinho from './carrinho-de-compras-de-design-xadrez.png'


function Compra() {
  return (
    <div>
      <nav class="cabecalho">
              <h1 class="titulo_link">Atacadinho</h1>
              <a href='/listar-user' ><img className='img_link' src={carrinho} alt="Descrição da imagem" /></a>
      </nav>

      <div className='container'>
        <div className='carrossel'>
          <div class="item">
            <div className='info product-card'>
              <h2>Arroz</h2>
              <p class="price">R$ 25,00</p>
              <p>Quantidade:</p>
              <input type="number" value="1" min="1" id="quantity"/>
              <button class="add-button">Adicionar ao carrinho</button>
            </div>
          </div>
        </div>
      </div>      

    {/* <script>
        var swiper = new Swiper(".myswiper", {
          spaceBetween: 30,
        })
    </script> */}
    
    </div>
  );
}

export default Compra;
