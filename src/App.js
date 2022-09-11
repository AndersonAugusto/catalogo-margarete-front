import './App.scss';
import Catalogo  from './components/catalogo'

function App() {
  return (
    <div className="App">
        <div className='aboutMe'>
          <h4> Margarette Morais </h4>
          <p className='description-person'>
            Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e conhecimento neste mercado.Olá, sou a margarete. Comerciante de calçados. Tenho 5 anos de experiência e 
            
          </p>
          <div className='whatsapp-button'>
            <img src='https://cdn-icons-png.flaticon.com/512/220/220236.png' width='35px' height='35px' alt='whatsapp'/>
            <p>Whatsapp</p>
          </div>
        </div>


        <div className='containerCatalogo'>

            <h4 className='title-Catalogo'> Catálogos </h4>

            <div className='catalogos'>
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
              <Catalogo 
                Titulo = 'cuidado'
                Description = 'Sapatos lindos é aqui'
                url = 'https://5119028l.ha.azioncdn.net/img/2020/10/produto/1326/sapato-casual-preto.jpg?ims=fit-in/400x400/filters:fill(fff)'
              />
            </div>
        </div>
    </div>
  );
}

export default App;
