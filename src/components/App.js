import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Home from "./Home"
import Movimentacao from "./Movimentacao"

export default function App (){
    
    return(

        <>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/entrada" element={<Movimentacao tipo={true}/>}/>
                    <Route path="/saida" element={<Movimentacao tipo={false}/>}/>

                </Routes>
            </BrowserRouter>
        </>
        
        
    )
}