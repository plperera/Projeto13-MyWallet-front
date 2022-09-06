import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Cadastro from "./Cadastro"
import Home from "./Home"

export default function App (){

    return(

        //(false) ? (<Login/>):(<Cadastro/>)
        <>
            <Home/>
        </>
        
        
    )
}