import './App.scss';
import { useState } from 'react'
import { GetAll } from './hook/getAll';
import Loading from './components/loading'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from 'js-cookie'
import ArrowRight from '@mui/icons-material/ArrowForwardIos';
import ArrowLeft from '@mui/icons-material/ArrowBackIosNew';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios'


function App() {
  
  const {data  , isFetching} =  GetAll('http://172.16.0.7:3003/perfil')
  
  const [edit , setEdit] = useState(false)
  const [codigoInput , setCodigoInput] = useState([])
  const [statusPermition , setStatusPermition] = useState('Solicite um código por SMS')
  const [authorization , setAuthorization] = useState(Cookies.get('authorization') || false)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  let usuario = []
    let catalogos = [] 
    let successCode = 'Código validado!'

    data ? catalogos = data.data.catalogo : catalogos = null
    data ? usuario = data.data.perfil[0] : usuario = null

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

      //FUNCTIONS
      function verifyStatus() {
        !edit ? setEdit(true) : setEdit(false)
      }

      function geraCodigo() {
        setOpen(false)

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

          axios.post('http://172.16.0.7:3003/postCodigo' , body)
              .then(response => {
                  if(response) {
                    console.log('Código enviado por SMS')
                  } 
              })
              .catch(error => {
                console.error(error)
            })
      }

      function validaCodigo() {

          axios.post(`http://localhost:3003/validaCodigo?codigo=${codigoInput}&idUsuario=${usuario.idusuario}`)
              .then(response => {
                  if(response) {
                    setStatusPermition(successCode)
                    Cookies.set('authorization' , true , {expires: 0.5})
                  }
              })
            .catch(error => {
              setStatusPermition(error.response.data.Message)
              console.error(error)
          })
      }

        console.log(authorization)
      
  return (
    <div className="App">

        {isFetching &&
            <Loading /> 
         }

        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                ATENÇÃO
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Ao confirmar, você receberá um SMS com um código de autorização para editar a página.
              </Typography>
              <Typography sx={{ mt: 4 }}>
                <Button className='buttonModal' onClick={() => geraCodigo() } variant="contained">Confirmar</Button>
              </Typography>
            </Box>
          </Modal>
        </div>


         
        <div className='editBtn'>
           <span onClick={()=> verifyStatus()}>
             { !edit ? <ArrowRight/> : <ArrowLeft />}
           </span>
           <input 
             type="text" 
             placeholder='código' 
             className={ !edit ? 'close' : 'show' }
             value={codigoInput}
             onChange={(e)=> setCodigoInput(e.target.value)}
            /> 

            <span onClick={handleOpen} className={ !edit ? 'close' : 'show' }>
              <button> Solicitar </button>
            </span>

            <span onClick={() => validaCodigo()} className={ !edit ? 'close' : 'show' }>
              <button> Validar </button>
            </span>

            { edit &&
                <span className={ ` statusValidate , ${statusPermition == successCode ? 'color-sucess' : 'color-error'}`}>
                    { statusPermition && statusPermition }
                </span>
            }
        </div>

        <div className='aboutMe'>
            { authorization && 
              <span className='editPencil'> <EditIcon/> </span> 
            }
          <h4> 
            {usuario && usuario.nome}  
          </h4>
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
                              <span className='deleteCatalogo'><DeleteIcon/></span>
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
