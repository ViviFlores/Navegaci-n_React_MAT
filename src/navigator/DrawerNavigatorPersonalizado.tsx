import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigatorPersonalizado = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno {...props} />}>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
        </Drawer.Navigator>
    );
}

//Componente Menu Lateral
const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://static.vecteezy.com/system/resources/previews/000/439/863/non_2x/vector-users-icon.jpg'
                    }}
                    style={styles.avatar} />
            </View>
            <View style={styles.menuContainer}>
                <TouchableOpacity style={styles.menuButton}
                    onPress={() => navigation.navigate('StackNavigator')} >
                    <Text style={styles.menuText}>Navegación</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton}
                    onPress={() => navigation.navigate('Setting')}>
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>

        </DrawerContentScrollView>
    )
}