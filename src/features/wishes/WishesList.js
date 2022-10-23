import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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

export default function WishesList() {
	const [loginVisible, setLoginVisible] = useState(false);
	const login = useSelector(state => state.login);

	const wishes = useSelector((state) => state.wishes);

	return (
		<View style={{alignItems: 'center'}}>
		{login.value ?
		<ScrollView>
		{wishes.map((wish) => 
			<View key={wish.id} style={{paddingBottom: 25, width: windowWidth * 0.8, backgroundColor: '#ffffff'}}>
			<Image 
			source={wish.sourceImage}
			resizeMode='contain'
			style={{width: windowWidth * 0.8, height: windowWidth * 0.5}}/>
			<Text style={{marginTop: 15, alignSelf: 'center', fontWeight: 'bold'}}>$MXN{wish.price}.00</Text>
			</View>
		)}
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
