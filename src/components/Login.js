import styled from "styled-components"
import logo from "../img/logo.svg"
import { useNavigate } from 'react-router-dom'
import { useEffect , useState, useContext } from "react"
import axios from "axios"
import userContext from "../contexts/userContext"

export default function Login (){

    const navigate = useNavigate()

    const {setUser} = useContext(userContext)

    const [form, setForm] = useState({
        email:"",
        password:"",
    })
    function handleForm (e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    async function sendForm () {
        
        try {
            const res = await axios.post("http://localhost:5000/login", form)
            setUser({token: res.data.token, name: res.data.name})
            console.log(form)
            navigate('/')
        } catch (error) {
            console.log(error)
        } 
 
    }

    return(
        <Container>
            <Logotipo src={logo}></Logotipo>

            <Formulario>

                <Input placeholder="E-mail" name="email" onChange={handleForm} value={form.email} required></Input>
                <Input placeholder="Senha" name="password" onChange={handleForm} value={form.password} required></Input>

                <Button onClick={() => sendForm()}>Entrar</Button>

            </Formulario>
            
            <p onClick={() => navigate("/cadastro")}>Primeira vez? Cadastre-se!</p>

        </Container>
    )
}
export const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    
    width:100%;
    height:100vh;

    p {
        text-align:center;
        width: 227px;
        height: 18px;

        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
    }
`
export const Logotipo = styled.img`
    width:147px;
    margin-bottom: 24px;
`
export const Input = styled.input`  
    width: 326px;
    height: 58px;
    margin-bottom: 13px;

    background-color: #FFFFFF;
    border-radius: 5px;
`
export const Button = styled.div`
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
export const Formulario = styled.form`

    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    
    width:100%;

`
