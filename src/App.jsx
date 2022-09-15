import './App.scss';
import { useState } from 'react'
import { GetAll } from './hook/getAll';
import Loading from './components/loading'
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import axios from 'axios'
function App() {
  
    const {data  , isFetching} =  GetAll('http://172.16.0.7:3003/perfil')

    const [edit , setEdit] = useState(false)
    const [codigoInput , setCodigoInput] = useState(null)

    let usuario = []
    let catalogos = [] 

    data ? catalogos = data.data.catalogo : catalogos = null
    data ? usuario = data.data.perfil[0] : usuario = null

    // console.log(process.env.REACT_APP_PASSWORD)
    

    //FUNCTIONS
      function verifyStatus() {
        !edit ? setEdit(true) : setEdit(false)
      }

      function geraCodigo() {
          let codigo = []
          
          do {
            const number = Math.floor(Math.random() * 9)
            codigo.push(number)
          } while (codigo.length < 5)

          let codigoEditar = codigo.join("")

          let body = {
              idUsuario: usuario.idusuario,
              codigo: codigoEditar
          }

          // axios.post('http://172.16.0.7:3003/postCodigo' , body  )
          //     .then(response => {
          //         if(response) {
          //           return alert('Você receberá o código em seu whatsapp')
          //         }
          //     })
          //     .catch(error => {
          //       console.error(error)
          //   })
      }
      function validaCodigo() {
          
        console.log('opaa')
        console.log(codigoInput)

          // axios.post(`http://localhost:3003/validaCodigo?codigo=${codigoInput}`)
          //     .then(response => {
          //         if(response) {
          //           console.log('Validado!')
          //         } else {
          //           console.log('Ta errado man')
          //         }
          //     })
          //     .catch(error => {
          //       console.error(error)
          //   })
      }

  return (
    
    <div className="App">
         {isFetching &&
            <Loading /> 
         }
         
        <div className='editBtn'>
           <span onClick={()=> verifyStatus()}>
             { !edit ? <ArrowRight/> : <ArrowLeft />}
           </span>
           <input 
             type="text" 
             placeholder='código' 
             className={ !edit ? 'close' : 'show' }
             value={codigoInput}
             onChange={()=> setCodigoInput(codigoInput)}
            /> 
            <span onClick={() => geraCodigo()} className={ !edit ? 'close' : 'show' }>
              <button> Solicitar </button>
            </span>
            <span className={ !edit ? 'close' : 'show' }>
              <button onClick={() => validaCodigo()} > Validar </button>
            </span>
        </div>

        <div className='aboutMe'>
          <h4> {usuario && usuario.nome} </h4>
          <p className='description-person'>  { usuario && usuario.sobremim } </p>
          <div className='whatsapp-button'>
            <img src='https://cdn-icons-png.flaticon.com/512/220/220236.png' width='35px' height='35px' alt='whatsapp'/>
            <p> Whatsapp </p>
          </div>
        </div>

        <div className='containerCatalogo'>

            <h4 className='title-Catalogo'> Catálogos </h4>

            <div className='catalogos'>
              { catalogos && catalogos.map((catalogo) => (
                  <a key={catalogo.idCatalogo} href={ catalogo.urlCatalogo }>
                      <div className="container-catalogo">
                          <div className="capa-catalogo">
                              <img src={ catalogo.urlImagem } alt="capa" />
                          </div>
                          <div className="description">
                              <h3> { catalogo.titulo } </h3>
                              <p> {catalogo.descricao} </p>
                          </div>
                      </div>
                  </a>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
