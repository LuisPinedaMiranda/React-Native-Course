import { FlatList } from "react-native";
import styled from "styled-components/native";
export default function Componente(){
    const datarutas = [
        {name:"1-conversor", href:""},
        {
            name:"teoria"
        }
    ]
    const renderItem = ({item})=>(
        <Title>{item.name}</Title>
    );
return (
  <Container>
    <Title>MENÚ</Title>
    <FlatList key={(item)=>item.name} data={datarutas} renderItem={renderItem}/>
  </Container>
);
}

const Container = styled.View`
    flex:1;
    justify-content:center;
    align-items: center;
    background-color: #f7e7ce;
`
const Title = styled.Text`

`