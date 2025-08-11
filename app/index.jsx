import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { FlatList, Platform, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
export default function Componente() {
  const datarutas = [
    { name: "1-conversor", href: "/(1-conversor)" },
    {
      name: "teoria",
      href: "/(teoria)",
    },
  ];
  const router = useRouter()
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>router.push(item.href)}>
        <LinkButton href={item.href}>
          <IconContainer>
            <MaterialIcons name="article" size={24} color="#fff" />
            <Name>{item.name}</Name>
          </IconContainer>
          <Arrow name="chevron-right" />
        </LinkButton>
      </TouchableOpacity>
    );
  };
  return (
    <Container style={{paddingTop:Platform.OS==="ios"?0:50}} >
      <StatusBar style="light"/>
      <Title>MENÚ</Title>
      <List
        key={(item) => item.name}
        data={datarutas}
        renderItem={renderItem}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
const Title = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`;
//estilos para el reender item
const LinkButton = styled.View`
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  border: 2px solid #333;
  justify-content: space-between;
  width: 100%;
`;

const Name = styled.Text`
  color: #fff;
  font-size: 20px;
`;

const Arrow = styled(MaterialIcons)`
  color: #fff;
  font-size: 30px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

const List = styled(FlatList)`
  width: 100%;
  padding: 15px;
`;
