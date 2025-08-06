import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TouchableHighlight } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import imagenlogo from "../../assets/images/splash-icon.png";
import { darkTheme, lightTheme } from "../../styles/theme";

export default function Screen1(){

  const [ count, setCount ] = useState(0);
  const onpress = ()=>setCount(prev => prev + 1)

    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = ()=>{
        setIsDarkTheme((prevTheme)=>!prevTheme)
    }
    const currentTheme = isDarkTheme?darkTheme:lightTheme;
    const data = {
      nombre:"frank",
      curso:"react native"
    }

    const router = useRouter();
    return (
      <ThemeProvider theme={currentTheme}>
        
          <Container>
            <Text style={styles.text}>Hola desde screen 1</Text>
            <TouchableHighlight
              underlayColor="#ee3232"
              activeOpacity={0.1}
              onPress={onpress}
            >
              <Title>Hola desde screen 1</Title>
            </TouchableHighlight>
            <Button
              title="Ir a screen 2"
              onPress={() =>
                router.push({
                  pathname: "/screen2",
                  params: data,
                })
              }
            ></Button>
            <Button title="Cambiar Tema" onPress={toggleTheme}></Button>
            <Title>{count}</Title>
              <TextInputEntrada  keyboardType="numeric"></TextInputEntrada>
            <Imagen source={imagenlogo} />
          
          </Container>
       
      </ThemeProvider>
    );
}

const Imagen = styled.Image`
 
  `

const TextInputEntrada = styled.TextInput`
  color: #23BAC4;
`;

const Title = styled.Text`
    color: #23BAC4;
    font-size: 25px;
`;

const Container = styled.View`
    background-color:${({theme})=>theme.colors.background};
    flex-direction: column;
    flex:1;
    
`
    

const styles = StyleSheet.create({
    text:{
        color:"#EF280F",
        fontSize:27
    }
})