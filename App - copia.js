import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import {Platform} from 'react-native'

const onButtonPress = () => {
Alert.alert("Mensaje de bienvenida", "Bienvenido por presionar el boton");
	  
};

export default class App extends React.Component {

  constructor() {
    super();
    this.state={name:'', greeting:''}
  }

  onChangeText = () => {
    this.setState({
      greeting:"Hola estudiante "+ this.state.name + " de la clase de Programación Móvil"
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontWeight:'bold', fontSize:20}}>
              Escriba su nombre aquí:
        </Text>
        
        


<TextInput style={{fontSize:18}} placeholder="Escribe tu nombre aquí"
                   onChangeText={(name) => this.setState({name})} 
                   >         
         </TextInput>
        <Button title="Clickea"
                onPress={this.onChangeText}
				//onPress={onButtonPress}
                >

        </Button>

         <Text style={{fontWeight:'bold',fontSize:20, color:'#FF8A65'}}>
          {this.state.greeting}
         </Text>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81C784',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: (Platform.OS) === 'android' ? 20 : 0,
  },
});
