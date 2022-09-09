import styled from "styled-components"
import { Input } from "./Login"

import { useState } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'


export default function Movimentacao ({tipo}){

    const navigate = useNavigate()

    const headers = {
        user: "Pedro Pereira"
    }
    const [form, setForm] = useState({
        valor:"",
        descricao:""
    })

    function handleForm(e){
        if (e.target.value < 0 && !tipo){

            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        } else {

            setForm({
                ...form,
                [e.target.name]: e.target.value
            })
        }
        
    }
    function sendForm() {
        let body
        if (!tipo){

            body = {
                ...form,
                valor: Math.abs(form.valor) * -1
            }

        } else {
            body = { ...form }
        }
        console.log(body)

        const promisse = axios.post('http://localhost:5000/historico', body, {
            headers: headers
        })
        .then ((r) => navigate('/'))
        .catch ((r) => console.log(r))
    }


    return(
        <Container>

            <ContainerTittle>
                <p>Nova {tipo ? ("entrada"):("saída")}</p>
                {/* <img src={exitIcon}></img> */}
            </ContainerTittle>

            <Formulario>

                <Input placeholder="Valor" name="valor" onChange={handleForm} value={form.valor} required></Input>
                <Input placeholder="Descrição" name="descricao" onChange={handleForm} value={form.descricao} required></Input>

                <Button onClick={() => sendForm()}>
                    Salvar {tipo ? ("entrada"):("saída")}
                </Button>

            </Formulario>
            

            
        </Container>
    )
}

const Formulario = styled.form`
    display:flex;
    //justify-content:center;
    align-items:center;
    flex-direction: column;
    
    width: 100%;
`
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
