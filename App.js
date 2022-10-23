/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
	Image,
	Dimensions,
	TouchableOpacity
} from 'react-native';

import store from './src/app/store';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import PurchasesScreen from './src/screens/PurchasesScreen';
import WishesScreen from './src/screens/WishesScreen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

	return (
		<Provider store={store}>
		<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
		<Stack.Screen name="Home" component={HomeScreen} options={({ navigation }) => ({ title: 'Tienda', headerRight: () => (
			<View/>
		)})}/>
		<Stack.Screen name="Purchases" component={PurchasesScreen} options={({ navigation }) => ({ title: 'Bolsa', headerRight: () => (
			<View/>
		)})} />
		<Stack.Screen name="Wishes" component={WishesScreen} options={{ title: 'Lista de deseos' }} />
		</Stack.Navigator>
		</NavigationContainer>
		</Provider>
	);
};


export default App;
