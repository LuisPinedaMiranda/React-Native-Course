import styled from "styled-components/native";

export default function Index(){

  const datacategorias = [
    {
      id:1,name:"FlatList"
    },
     {
      id:2,name:"SectionList"
    }
  ]

    return (
          <Container>
           <Title>Seleccione una categoria</Title>   
           <CategoriasSection> 
            {
              datacategorias.map((item)=>{
                return(
                  <CategoryContainer key={item.id}>
                    <CategoryName>{item.name}</CategoryName>
                  </CategoryContainer>
                )

                
              })
            }
            
            </CategoriasSection>    
          </Container>
    );
}



const Container = styled.View`
    flex:1;
    background-color: #000;
`
const Title = styled.Text`
    color: #f1f2f0;
    font-size: 32px;
    align-items: center;
    justify-content: center;
`;

const CategoriasSection = styled.View`

`
//item de categoria
const CategoryContainer = styled.TouchableOpacity`

`

const CategoryName = styled.Text`
  color: #fff;
`
