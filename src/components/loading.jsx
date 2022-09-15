import styled from 'styled-components'

const Button = styled.div `
   z-index: 999;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   margin-top: 30%;
   border-radius: 5rem;
   border-left: 0.3rem solid #fff;
   background-color: transparent;
   transform: rotate(0deg);
   animation: spinning 1s linear infinite;

   @keyframes spinning {
        0% {
            transform: rotate(0deg);
        }
        0% {
            transform: rotate(-360deg);
        }
    }

   `
const Container = styled.div `
   position: fixed;
   bottom: 0;
   display:flex;
   align-itens: center;
   justify-content: center;
   z-index: 999;
   width: 100%;
   background-color: #00000063;
   height: 100vh;
`

export default function Loading() {

    return (
        <Container>
            <Button />
        </Container>
    )
}