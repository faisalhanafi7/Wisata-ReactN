import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ProfilScreen = () => {
	return (
		<View style={styles.container}>
         <View>
            
         </View>
		 <View>
		   <Text 
		   style={styles.text}>
		   Sign In Account </Text>
	    </View>
	   </View>
	);
};

export default ProfilScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
    text: {
    	fontSize: 29,
    	color: '#fff',
    	marginTop: 35,
    	paddingLeft: 50,
    	// fontHeight: 'bold',
    }
});