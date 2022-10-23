import React, { useEffect } from 'react';
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

import PurchasesList from './../features/purchases/PurchasesList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function PurchasesScreen({navigation}) {

	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<View style={{flexDirection: 'row'}}>
				<TouchableOpacity onPress={() => navigation.navigate('Wishes')} style={{paddingLeft: 15}}>
				<Image source={require('../../corazon.png')} resizeMode='contain' style={{width: 35, height: 35}}/>
				</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView>
		<StatusBar/>
		<PurchasesList />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	}
});

export default PurchasesScreen;
