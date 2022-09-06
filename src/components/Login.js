import styled from "styled-components"
import logo from "../img/MyWallet.svg"
export default function Login (){
    return(
        <Container>
            <img src={logo}></img>
        </Container>
    )
}
const Container = styled.div`
color:red;
    img {
        width:15px;
        color:black;
    }
`