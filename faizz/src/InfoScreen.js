import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const InfoScreen = () => {
	return (
		<View style={styles.container}>
         <View>
            
         </View>
		 <View>
		   <Text 
		   style={styles.text}>
		   Infomasi </Text>
	    </View>
	     <Image source={require('./gambar/mjk.jpg')} style={styles.gambar} />
	   </View>
	);
};

export default InfoScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
    	
	},
    text: {
    	fontSize: 20,
    	color: '#fff',
    	marginTop: 35,
    	paddingRight: 5,
    },
    gambar: {
    	width: '90%',
    	height: 150,
    	marginLeft:'5%',
    	marginTop: 90,
    }
});