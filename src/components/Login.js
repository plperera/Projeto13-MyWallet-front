import styled from "styled-components"
import logo from "../img/logo.svg"
export default function Login (){
    return(
        <Container>
            <Logotipo src={logo}></Logotipo>
            <Input></Input>
            <Input></Input>
            <Button>Entrar</Button>
            <p>Primeira vez? Cadastre-se!</p>

        </Container>
    )
}
const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    
    width:100%;
    height:100vh;

    p {
        width: 191px;
        height: 18px;

        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
`
const Logotipo = styled.img`
    width:147px;
    margin-bottom: 24px;
`
const Input = styled.input`  
    width: 326px;
    height: 58px;
    margin-bottom: 13px;

    background-color: #FFFFFF;
    border-radius: 5px;
`
const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    width: 326px;
    height: 46px;
    margin-bottom: 36px;

    background-color: #A328D6;
    border-radius: 5px;

    color: #FFFFFF;
    font-weight: 700;
    font-size: 20px;
`
