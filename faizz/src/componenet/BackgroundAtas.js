import React from 'react'
import {StyleSheet, Text, View, Dimensions} from 'react-native'
import LineaGradient from 'react-native-linear-gradient'
const H = Dimensions.get('window').width;

const BackgroundAtas = ({ style }) =>  {
	return (
	   <LineaGradient 
	   start={{x: 0, y: 0}}
	   end={{x: 1, y: 0}}
	   style={[styles.LineaGradient, style]}
	   colors={['#0D9721', '#16BB29' , '#27F115']}>
	   <View style={styles.line} />
	   <View style={[styles.line, {top: 130, left: -150}]} />
	   <View style={[styles.line, {top: 160, left: 0}]} />
	   </LineaGradient>
	);
};

export default BackgroundAtas;

const styles = StyleSheet.create({
	LineaGradient: {
		height: (H * 3) / 4,
		borderBottomLeftRadius: 60,
		borderBottomRightRadius: 60,
	},
	line: {
		position: 'absolute',
		width: H,
		top: 100,
		left: -300,
		height: 80,
		backgroundColor: 'rgba(255,255,255,0.1)',
		transform: [
		  {
		  	rotate: '-35deg',
		  },
		],
		borderRadius: 60,
	},
});