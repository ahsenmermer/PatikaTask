import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import PatikaTaskDrawer from './patika-task-drawer';
import Detail from "../pages/Detail"
import { Provider } from 'react-redux';
import store from '../store';

const Stack = createNativeStackNavigator();

const Router = () => {

    return (
        <Provider store = {store}>

            <NavigationContainer>
                <Stack.Navigator initialRouteName='Drawer' screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name='Drawer' component={PatikaTaskDrawer} />

                    <Stack.Screen name="Detail" component={Detail} options={{
                        headerShown: true,
                    }} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default Router;