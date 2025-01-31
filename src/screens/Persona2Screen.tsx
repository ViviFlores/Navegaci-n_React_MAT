import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useRoute } from '@react-navigation/native';

//definiendo la interface de los parametros
interface RouteParams {
    id: number;
    nombre: string;
    edad: number;
}

export const Persona2Screen = () => {

    //hook useRoute: permite capturar los parametros de la navegación por hook
    const route = useRoute();
    const params = route.params as RouteParams;
    //console.log(params);

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
