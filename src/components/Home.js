import styled from "styled-components"
import exitIcon from "../img/exit.svg"
import menosIcon from "../img/menos.svg"
import maisIcon from "../img/mais.svg"
import LinhaHistorico from "./LinhaHistorico"

import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useContext } from "react"
import axios from 'axios';
import userContext from "../contexts/userContext"


export default function Home (){
    
    const {user} = useContext(userContext)
    console.log(user.token)
    const navigate = useNavigate()
    let subtotal = 0

    if (user.token === undefined) navigate('/login')

    const [historico, setHistorico] = useState([])
    const [total, setTotal] = useState(0)

    async function buscarHistorico (){

        try {
            const res = await axios.get('http://localhost:5000/historico',{
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            })
            console.log(res.data)
            setHistorico(res.data)
            
            
            
        } catch (error) {
            console.log(error)
            navigate('/login')
        }  
    }

    useEffect (() => {

        buscarHistorico()    
           
    }, [])
    useEffect (() => {

        historico.map((e) => {
            subtotal += Number(e.valor)
        })
        setTotal(subtotal)    
           
    }, [historico])

    return(
        <Container>

            <ContainerTittle>
                <p>Olá, {user.name}</p>
                <img src={exitIcon} onClick={() => navigate("/login")}></img>
            </ContainerTittle>

            <ContainerRegistro>
                
                {(historico.length > 0) ? (<LinhaHistorico array={historico}/>):(<ContainerVazio>Não há registros de entrada ou saída</ContainerVazio>)}

                <ContainerSaldo> 
                    <TittleSaldo>SALDO</TittleSaldo>
                    <TittleNumber movimentacao= { (total > 0) ? ("#03AC00"):("#C70000")}>{total}</TittleNumber>
                </ContainerSaldo>
                
            </ContainerRegistro>

            <ContainerButton>

                <Button onClick={ () => navigate("/entrada")}> 
                    
                    <img src={maisIcon}></img>
                    <p>Nova entrada</p>
                                
                </Button>
                <Button onClick={ () => navigate("/saida")}>
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
const ContainerSaldo = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between !important;

    width:95%;
    bottom:7px;

    position:absolute;

`
const TittleSaldo = styled.div`
    font-size: 17px;
    color: #000000;
    font-weight: 700;
    text-align:center;

    width: 63px;
    height: 20px;       
`
const TittleNumber = styled.div`
    font-size: 17px;
    color: ${props => props.movimentacao};
    font-weight: 700;
    text-align:center;

    width: 63px;
    height: 20px;       
`

const ContainerTittle = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;

    height: 31px;
    width:87%;
    margin: 25px 0;

    p{
        width: 80%;

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
    flex-direction:column;
    //justify-content: center;
    align-items: center;

    height: 446px;
    width:87%;
    background-color: #FFFFFF;
    border-radius: 5px;
    position:relative;


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
const ContainerVazio = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    height:100%;

    font-size: 20px;
    color: #868686;

`