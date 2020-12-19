import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const Atas = () => {
	return (
		<View style={styles.MainContainer}>
		  <Image source={require ("../gambar/Kabar.jpg")}
		  style={styles.Image} />
		  <Text style={styles.Text}> Kota Mojokerto </Text>
		 </View>
	)
}

const styles = StyleSheet.create({
	Text : {
		marginTop: 5,
		fontSize: 20,
		color: '#0250a3',
		fontWeight: 'bold',
	},
	Image : {
		// alignItems: 'top',
		width:  320,
		height:150,
		borderTopRightRadius: 60 ,
		borderBottomRightRadius: 60 ,
	},
});
export default Atas;