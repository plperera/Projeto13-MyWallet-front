import styled from "styled-components"
import logo from "../img/logo.svg"
import {Container, Input, Button, Logotipo, Formulario} from "./Login"
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from "react"
import axios from "axios" 

export default function Cadastro (){

    const navigate = useNavigate()

    const [form, setForm] = useState({
        name:"",
        email:"",
        password:"",
        passwordVerify:"",
    })
    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    async function sendForm () {
                
        try {
            const res = await axios.post("http://localhost:5000/cadastro", form)
            console.log(form)
            navigate('/login')
        } catch (error) {
            console.log(error)

        }

    }

    return(
        <Container>
            <Logotipo src={logo}></Logotipo>

            <Formulario>

                <Input placeholder="Nome" name="name" onChange={handleForm} value={form.name} required></Input>
                <Input placeholder="E-mail" name="email" onChange={handleForm} value={form.email} required></Input>
                <Input placeholder="Senha" name="password" onChange={handleForm} value={form.password} required></Input>
                <Input placeholder="Confirme sua senha" name="passwordVerify" onChange={handleForm} value={form.passwordVerify} required></Input>

                <Button onClick={() => sendForm()}>Cadastrar</Button>

            </Formulario>
                        
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
