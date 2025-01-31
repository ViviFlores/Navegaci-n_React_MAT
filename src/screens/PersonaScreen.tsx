import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';

//capturamos las propiedades de la navegación
type Props = StackScreenProps<RootStackParams, 'Persona'>;

//interface de params
/* interface RouteParams {
    id: number;
    nombre: string;
    edad: number;
} */

export const PersonaScreen = ({ route }: Props) => {
    //const params = route.params as RouteParams;
    //console.log(params);
    const params = route.params;

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {params.id},
                {params.nombre},
                {params.edad}
            </Text>

        </View>
    )
}
