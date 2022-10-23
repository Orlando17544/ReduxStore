import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logUser } from './loginSlice';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Login(props) {
	const [email, setEmail] = useState('');	
	const [password, setPassword] = useState('');

	const login = useSelector(state => state.login);
	const dispatch = useDispatch();

	return (
		<Modal	
		animationType="slide"
		transparent={false}
		visible={props.loginVisible}
		onRequestClose={() => {
			props.setLoginVisible(!props.loginVisible);
		}}
		>
		{login.value ? 
			<View style={{justifyContent: 'center', alignSelf: 'center', width: windowWidth * 0.8, height: windowHeight}}>
			<Text style={{alignSelf: 'center', fontSize: 15}}>Ya estas logueado!</Text>
			<TouchableOpacity style={{backgroundColor: '#1f201f', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: windowWidth * 0.1}} onPress={() => props.setLoginVisible(!props.loginVisible)}>
				<Text style={{color: '#ffffff'}}>CERRAR</Text>
			</TouchableOpacity>
			</View>
			: 
			<View style={{backgroundColor: '#ffffff', width: windowWidth * 0.8, height: windowHeight, alignSelf: 'center', justifyContent: 'center'}}>
			<Text>E-MAIL:</Text>
			<TextInput value={email} onChangeText={(email) => setEmail(email)} style={{borderWidth: 1}}/>
			<Text style={{paddingTop: 15}}>Contraseña:</Text>
			<TextInput value={password} onChangeText={(password) => setPassword(password)} secureTextEntry={true} style={{borderWidth: 1}}/>
			<Pressable style={{backgroundColor: '#1f201f', padding: 10, justifyContent: 'center', alignItems: 'center', marginTop: windowWidth * 0.1}} onPress={() => {dispatch(logUser({value: true})); props.setLoginVisible(false);}} disabled={email && password ? false : true}>
			<Text style={{color: '#ffffff'}}>IDENTIFÍCATE</Text>
			</Pressable>
			</View>
		}
		</Modal>
	) 
}
