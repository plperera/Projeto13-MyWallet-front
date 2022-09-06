import styled from "styled-components"
import exitIcon from "../img/exit.svg"
import menosIcon from "../img/menos.svg"
import maisIcon from "../img/mais.svg"

export default function Home (){
    return(
        <Container>

            <ContainerTittle>
                <p>Olá, Fulano</p>
                <img src={exitIcon}></img>
            </ContainerTittle>

            <ContainerRegistro>
                Não há registros de entrada ou saída
                {/*<Registro/>*/}
            </ContainerRegistro>

            <ContainerButton>

                <Button>              
                    <img src={maisIcon}></img>
                    <p>Nova entrada</p>
                </Button>
                <Button>
                    <img src={menosIcon}></img>
                    <p>Nova saída</p>                  
                </Button>

            </ContainerButton>
        </Container>
    )
}
const Container = styled.div`
    display:flex;
    //justify-content:center;
    align-items:center;
    flex-direction: column;
    
    width: 100%;
    height: 100vh;
`
const ContainerTittle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;

    height: 31px;
    width:87%;
    margin: 25px 0;

    p{
        width: 141px;

        color: #FFFFFF;
        font-size: 26px;
        font-weight: 700;
    }
    img {
        width:24px;
    }
`
const ContainerRegistro = styled.div`

    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;

    height: 446px;
    width:87%;
    background-color: #FFFFFF;
    border-radius: 5px;

    p {
        width: 180px;
        font-size: 20px;
        color: #868686;
    }
`
const ContainerButton= styled.div`
    
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;

    width: 87%;
    height: 114px;
    margin-top: 23px;

    border-radius: 5px;
    p{
        position:absolute;
        bottom: 15px;
        left: 10px;

        color: white;
        font-weight: 700;
        font-size: 17px;
    }
    img {
        position:absolute;
        top: 15px;
        left: 10px;
    }
`
const Button = styled.div`
    position:relative;
    width: 155px;
    height: 114px;

    background: #A328D6;
    border-radius: 5px;
`