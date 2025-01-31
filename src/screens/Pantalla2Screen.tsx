import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions, useNavigation } from '@react-navigation/native';

//interface Persona
interface Persona {
  id: number;
  nombre: string;
  edad: number
}

export const Pantalla2Screen = () => {
  //hook useNavigation: permite navegar entre pantallas
  const navigation = useNavigation();

  const persona: Persona = {
    id: 3,
    nombre: 'Adrian',
    edad: 21
  }

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pantalla 2</Text>
      <Button
        title='Ir pantalla 3'
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Pantalla3' }))} />
      <TouchableOpacity
        onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Persona2', params: persona }))} >
        <Text>Ir a persona</Text>
      </TouchableOpacity>
    </View>
  )
}
