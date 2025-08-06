import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Screen2(){
    const router = useRouter();
    const {nombre, curso} = useLocalSearchParams();

    return (
      <View>
        <Text>Hola desde screen 2 {nombre}</Text>
          <Text>curso: {curso}</Text>
        <Button 
        title="Ir a screen 1" 
        onPress={() => router.back()}>
            
        </Button>
      </View>
    );
}