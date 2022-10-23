import React, { useState, useEffect } from 'react';
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
	TouchableOpacity,
	Modal,
	TextInput
} from 'react-native';

import Login from './../features/login/Login';

import { SHOPPING_ITEMS } from './../data/SHOPPING_ITEMS';
import { useDispatch, useSelector } from 'react-redux'

import { purchaseAdded } from '../features/purchases/purchasesSlice'
import { wishAdded, wishRemoved } from '../features/wishes/wishesSlice'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({ navigation }) {

	const dispatch = useDispatch();

	const [loginVisible, setLoginVisible] = useState(false);

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => setLoginVisible(!loginVisible)}>
				<Image source={require('../../entrar.png')} resizeMode='contain' style={{width: 35, height: 35}}/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Purchases')} style={{paddingLeft: 15}}>
				<Image source={require('../../compras.png')} resizeMode='contain' style={{width: 35, height: 35}}/>
				</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView>
		<StatusBar/>
		<Login loginVisible={loginVisible} setLoginVisible={setLoginVisible}/>
		<ScrollView>
		<View style={{justifyContent: 'flex-start', alignItems: 'center'}}>
		{SHOPPING_ITEMS.map((shoppingItem) => 
			<View key={shoppingItem.id}>
			<View>
			<Image
			source={shoppingItem.sourceImage}
			resizeMode='cover'
			style={{width: windowWidth * 0.8, height: windowHeight * 0.6}}
			/>
			{useSelector((state) => state.wishes.find((wish) => wish.id === shoppingItem.id)) ?
			<TouchableOpacity style={{position: 'absolute', top: 0, right: windowWidth * 0.01}} onPress={() => dispatch(wishRemoved(shoppingItem))}>
			<View style={{width: windowWidth * 0.18, height: windowWidth * 0.18, backgroundColor: '#ede5db', borderRadius: windowWidth * 0.18 / 2, position: 'absolute', top: windowWidth * 0.02, right: 0}} />	
			<Image
			source={require('../../corazonActivo.png')}
			resizeMode='contain'
			style={{width: windowWidth * 0.15, height: windowHeight * 0.15, right: windowWidth * 0.01}}/>
			</TouchableOpacity>
				:
			<TouchableOpacity style={{position: 'absolute', top: 0, right: windowWidth * 0.01}} onPress={() => dispatch(wishAdded(shoppingItem))}>
			<View style={{width: windowWidth * 0.18, height: windowWidth * 0.18, backgroundColor: '#ede5db', borderRadius: windowWidth * 0.18 / 2, position: 'absolute', top: windowWidth * 0.02, right: 0}} />	
			<Image
			source={require('../../corazon.png')}
			resizeMode='contain'
			style={{width: windowWidth * 0.15, height: windowHeight * 0.15, right: windowWidth * 0.01}}/>
			</TouchableOpacity>
			}
			<TouchableOpacity style={{position: 'absolute', bottom: windowHeight * 0.05, alignSelf: 'center', backgroundColor: '#1f201f', paddingVertical: 10, paddingHorizontal: 25}} onPress={() => dispatch(purchaseAdded({...shoppingItem, quantity: 1}))}>
			<Text style={{color: '#ffffff'}}>Añadir a la bolsa</Text>
			</TouchableOpacity>
			</View>
			<Text style={{paddingVertical: 10, fontWeight: 'bold', fontSize: 15}}>$MXN{shoppingItem.price}.00</Text>
			<Text style={{paddingVertical: 10, fontSize: 15}}>{shoppingItem.name.slice(0,30)}...</Text>
			</View>
		)}
		</View>
		</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	}
});

export default HomeScreen;
