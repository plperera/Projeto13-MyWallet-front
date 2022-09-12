import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Home from "./Home"
import Movimentacao from "./Movimentacao"
import userContext from "../contexts/userContext"

export default function App (){
    const [token, setToken] = useState("")
    return(
        
        <userContext.Provider value={{token, setToken}}>
            <BrowserRouter>
                <Routes>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/entrada" element={<Movimentacao tipo={true}/>}/>
                    <Route path="/saida" element={<Movimentacao tipo={false}/>}/>

                </Routes>
            </BrowserRouter>
        </userContext.Provider>
        
        
    )
}