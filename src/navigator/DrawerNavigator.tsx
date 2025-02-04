import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingScreen } from '../screens/SettingScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
            <Drawer.Screen name="Setting" options={{title:'Configuración'}} component={SettingScreen} />
        </Drawer.Navigator>
    );
}