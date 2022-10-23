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

import WishesList from './../features/wishes/WishesList';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function WishesScreen({navigation}) {

	return (
		<SafeAreaView>
		<StatusBar/>
		<WishesList/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	}
});

export default WishesScreen;
