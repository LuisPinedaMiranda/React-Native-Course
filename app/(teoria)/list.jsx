import { useRouter } from "expo-router";
import { SectionList } from "react-native";
import styled from "styled-components/native";

export default function List(){

  const data = [
      {
        producro:"cerveza",
        precio:"$ 2"
      },
      {
        producro:"agua mineral",
        precio:"$ 1"
      },
      {
        producro:"caja de bombones",
        precio:"$ 3"
      },
    ]

     const dataSectionList = [
       {
         descripcion: "c",
         data: [
           {
             producro: "caja de bombones",
             precio: "$ 3",
           },
           {
             producro: "cerveza",
             precio: "$ 2",
           },
         ],
       },
       {
         descripcion: "a",
         data: [
           {
             producro: "agua mineral",
             precio: "$ 3",
           },
         ],
       },
     ];

    const router = useRouter();

    const renderItem = ({item})=>{
       return (
        <ContainerItem>
          <Producto>
            {item.producro}
            {item.precio}
          </Producto>
        </ContainerItem>
       );
    }
    
    const renderHeader = ({section})=>{
      return(<HeaderText >{section.descripcion}</HeaderText>)
    }

    const footerList = ()=>{
      return(
        <Producto>Pie de págoma</Producto>
      )
    }

    return (
          <Container>
            <Title>FlatList</Title>
            <ListaFlat keyExtractor={(item)=>item.producto}  data={data} renderItem={renderItem}/>
            <Title>SectionList</Title>
            <SectionList renderSectionFooter={footerList} renderSectionHeader={renderHeader} sections={dataSectionList} renderItem={renderItem}/>
                       
          </Container>
    );
}

const Imagen = styled.Image`
 
  `

const TextInputEntrada = styled.TextInput`
  color: #23BAC4;
`;

const Title = styled.Text`
    color: #f1f2f0;
    font-size: 50px;
`;

const Container = styled.View`
    flex:1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #000;
`

//estilos para el renderitem del FlatList
const ListaFlat = styled.FlatList`
  background-color: #f005;
`

//estilos para el renderitem
const ContainerItem = styled.View`
flex-direction: row;
gap: 20px;

`

const Producto = styled.Text`
color: #fff;
`

//Estilos para el Text de SectionList en renderHeader

const HeaderText = styled.Text`
  color: #fff;
  font-weight: bold;
`