import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { darkTheme, lightTheme } from "../styles/theme";

export default function Screen1(){
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = ()=>{
        setIsDarkTheme((prevTheme)=>!prevTheme)
    }
    const currentTheme = isDarkTheme?darkTheme:lightTheme;

    const router = useRouter();
    return (
      <ThemeProvider theme={currentTheme}>
        <Container>
          <Text style={styles.text}>Hola desde screen 1</Text>
          <Title>Hola desde screen 1</Title>
          <Button
            title="Ir a screen 2"
            onPress={() => router.push("/screen2")}
          ></Button>
          <Button title="Cambiar Tema" onPress={toggleTheme}></Button>
        </Container>
      </ThemeProvider>
    );
}

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