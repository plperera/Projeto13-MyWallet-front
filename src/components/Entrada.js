import styled from "styled-components"
import { Input } from "./Login"

export default function Entrada (){
    return(
        <Container>

            <ContainerTittle>
                <p>Nova entrada</p>
                {/* <img src={exitIcon}></img> */}
            </ContainerTittle>

            <Input></Input>
            <Input></Input>

            <Button>
                Salvar entrada
            </Button>
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
    width: 87%;
    margin: 25px 0 40px 0;

    p{
        width: 180px;
        color: #FFFFFF;
        font-size: 26px;
        font-weight: 700;
    }
    img {
        width:24px;
    }
`
const Button= styled.div`
    
    display:flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;

    width: 87%;
    height: 46px;
    left: 25px;
    top: 238px;

    background: #A328D6;
    border-radius: 5px;

    font-weight: 700;
    font-size: 20px;
    line-height: 23px;

    color: #FFFFFF;
`
