import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { RootStackParams } from '../navigator/StackNavigator';

//capturamos las propiedades de la navegación
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;

//interface Persona
interface Persona {
  id: number;
  nombre: string;
  edad: number
}

export const Pantalla1Screen = ({ navigation }: Props) => {
  //console.log(props);
  const persona: Persona = {
    id: 1,
    nombre: 'Viviana',
    edad: 32
  }

  const persona2: Persona = {
    id: 2,
    nombre: 'Luis',
    edad: 15
  }

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 1</Text>
      <Button
        title='Ir pantalla 2'
        onPress={() => navigation.navigate('Pantalla2')} />
      <Button
        title='Ir persona'
        onPress={() => navigation.navigate('Persona', persona)} />
      <TouchableOpacity style={styles.buttonPersona}
        onPress={() => navigation.navigate('Persona', persona2)}>
        <Text style={styles.buttonText}>Ir persona 2</Text>
      </TouchableOpacity>
    </View>
  )
}



