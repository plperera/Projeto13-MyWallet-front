import styled from "styled-components"

export default function LinhaHistorico ({array}){

    return (

        array.map ((e, i) => 

            <Container>
                <ContainerData>09/09/2022</ContainerData>
                <ContainerDescricao>{e.descricao}</ContainerDescricao>
                <ContainerValor>{e.valor}</ContainerValor>
            </Container>

        )
        
    )
}
const Container = styled.div`

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;

    width: 95%;
    height: 20px;
    margin-top: 23px;

`
const ContainerDescricao = styled.div`

    width: 65%;


`
const ContainerValor = styled.div`

    width: 15%;

    display:flex;
    align-items:center;
    justify-content:center;

`

const ContainerData = styled.div`

    width: 30%;

`