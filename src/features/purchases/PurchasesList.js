import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { purchaseAdded, purchaseRemoved, purchaseUpdated, purchasesRemoved } from './purchasesSlice';
import { wishAdded, wishRemoved } from '../wishes/wishesSlice';

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
	TextInput,
	Pressable
} from 'react-native';

import Login from './../login/Login';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PurchasesList() {
	const [loginVisible, setLoginVisible] = useState(false);
	const login = useSelector(state => state.login);
	const dispatch = useDispatch();

	const purchases = useSelector((state) => state.purchases);

	const wishes = useSelector((state) => state.wishes);

	return (
		<View style={{alignItems: 'center'}}>
		{login.value ?
		<ScrollView>
		{purchases.map((purchase) => 
			<View key={purchase.id} style={{flexDirection: 'row', paddingBottom: 25, justifyContent: 'space-between', width: windowWidth * 0.9, backgroundColor: '#ffffff', flex: 1}}>
			<Image 
			source={purchase.sourceImage}
			resizeMode='contain'
			style={{width: 110, height: 100, flex: 0.25}}/>
			<View style={{justifyContent: 'space-between', flex: 1}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text>{purchase.name.substring(0, 15)}...</Text>
					<View style={{flexDirection: 'row'}}>
					{wishes.find((wish) => wish.id === purchase.id) ?
					<TouchableOpacity style={{paddingRight: 15}} onPress={() => dispatch(wishRemoved(purchase))}>
					<Image 
					source={require('./../../../corazonActivo.png')}
					resizeMode='contain'
					style={{width: 25, height: 25}}/>
					</TouchableOpacity>
						:
					<TouchableOpacity style={{paddingRight: 15}} onPress={() => dispatch(wishAdded(purchase))}>
					<Image 
					source={require('./../../../corazon.png')}
					resizeMode='contain'
					style={{width: 25, height: 25}}/>
					</TouchableOpacity>
					}
					<TouchableOpacity onPress={() => dispatch(purchaseRemoved({purchaseId: purchase.id}))}>
					<Image 
					source={require('./../../../eliminar.png')}
					resizeMode='contain'
					style={{width: 25, height: 25}}/>
					</TouchableOpacity>
					</View>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
					<Text style={{fontWeight: 'bold'}}>$MXN{purchase.price}</Text>
					<View style={{flexDirection: 'row'}}>
						<TouchableOpacity onPress={() => dispatch(purchaseUpdated({id: purchase.id, quantity: -1}))}>
						<Image 
						source={require('./../../../menos.png')}
						resizeMode='contain'
						style={{width: 25, height: 25}}/>
						</TouchableOpacity>
						<Text style={{paddingHorizontal: 15}}>{purchase.quantity}</Text>
						<TouchableOpacity onPress={() => dispatch(purchaseUpdated({id: purchase.id, quantity: 1}))}>
						<Image 
						source={require('./../../../mas.png')}
						resizeMode='contain'
						style={{width: 25, height: 25}}/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			</View>
		)}
		<TouchableOpacity style={{backgroundColor: '#1f201f', paddingHorizontal: windowWidth * 0.35, paddingVertical: windowWidth * 0.02, justifyContent: 'center', alignItems: 'center', marginVertical: 10}} onPress={() => dispatch(purchasesRemoved())}>
			<Text style={{color: "#ffffff"}}>COMPRAR</Text>	
		</TouchableOpacity>
		</ScrollView> : 
			<View style={{justifyContent: 'center', alignItems: 'center', width: windowWidth, height: windowHeight}}>
				<View>
				<Text style={{fontSize: 15}}>No estas logueado</Text>
				<TouchableOpacity style={{backgroundColor: '#1f201f', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: windowWidth * 0.1}} onPress={() => setLoginVisible(true)}>
					<Text style={{color: "#ffffff"}}>INICIAR SESIÓN</Text>	
				</TouchableOpacity>
				<Login loginVisible={loginVisible} setLoginVisible={setLoginVisible}/>
				</View>
			</View>
		}
		</View>
	) 
}
