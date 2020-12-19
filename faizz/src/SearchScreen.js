import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const SearchScreen = () => {
	return (
		<View style={styles.container}>
         <View>

         </View>
		 <View>
		   <Text 
		   style={styles.text}>
		   Apa Yang Mau Dicari ? </Text>
	    </View>
	   </View>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    text: {
    	fontSize: 23,
    	color: '#fff',
    	marginTop: 35,
    	paddingRight: 5,
    	// fontHeight: 'bold',
    }
});