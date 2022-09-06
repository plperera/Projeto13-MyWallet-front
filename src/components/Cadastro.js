import styled from "styled-components"
import logo from "../img/logo.svg"
import {Container, Input, Button, Logotipo} from "./Login"
import { useNavigate } from 'react-router-dom'

export default function Cadastro (){

    const navigate = useNavigate()

    return(
        <Container>
            <Logotipo src={logo}></Logotipo>

            <Input></Input>
            <Input></Input>
            <Input></Input>
            <Input></Input>

            <Button onClick={() => navigate("/login")}>Cadastrar</Button>
            <p onClick={() => navigate("/login")}>Já tem uma conta? Entre agora!</p>

        </Container>
    )
}
/*
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
` */
