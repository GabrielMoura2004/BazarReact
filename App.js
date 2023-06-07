import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

/* Importamos os recursos necessarios para nossa navegação */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

/* Importamos nossas páginas criadas para inserir dentro da navegação */
import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';

/* Criamos nosso navegador com a variavel Tab */
const Tab = createBottomTabNavigator();

/* Aqui nós informamos qual tela recebera o icone */
/* Em 'name' informamos o nome do ícone Ionicons */
const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  }
};

function App() {
  return(
    /* Abre container da navegação */
    <NavigationContainer>
      {/* Insere a navegação Tab dentro container */}
      <Tab.Navigator 
        screenOptions={ ({route}) => ({
          tabBarIcon: ({ color, size }) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        })  }
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} options={{title: 'Início'}} />
        <Tab.Screen name="Sobre" component={Sobre} options={{title: 'Sobre nós'}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

/* Adicionando as imagens e descrições na tela inicial (Home) */
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://via.placeholder.com/300x300.png'}} style={styles.image}/>
      <Text style={styles.description}>Bem-vindo à nossa loja de bijuteria! Aqui você encontra acessórios incríveis para complementar o seu look. Nossas peças são produzidas com materiais de qualidade e seguindo as últimas tendências da moda. Aproveite nossas promoções e garanta já os seus favoritos!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20
  }
});

export default App;
              