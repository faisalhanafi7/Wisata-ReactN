import React, {useState} from 'react'
import { View, Text, StatusBar,SafeAreaView,ScrollView, StyleSheet, Dimensions} from 'react-native';
import BackgroundAtas from'./src/componenet/BackgroundAtas';
import BottomTab from'./src/componenet/BottomTab';
import HomeScreen from './src/HomeScreen';
import SearchScreen from './src/SearchScreen';
import MapScreen from './src/MapScreen'
import ProfilScreen from './src/ProfilScreen';
import InfoScreen from './src/InfoScreen';


const App = () => {

	const [tab, setTab] =  useState(0);

	return (
	    <>
		<StatusBar barStyle="dark-content" />
		<View style={styles.container} >
		  <BackgroundAtas style={styles.bg}/>
		  <ScrollView style={styles.ScrollView}>
		    {tab == 0 && <HomeScreen/>}
		    {tab == 1 && <SearchScreen/>}
		    {tab == 2 && <MapScreen/>}
		    {tab == 3 && <ProfilScreen/>}
		    {tab == 4 && <InfoScreen/>}
		   </ScrollView>
		  <BottomTab selected={tab} onSelected={index => setTab(index)}/>
		</View>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F0F1F9',
	},
	bg: {
		position:'absolute',
		width: Dimensions.get('window').width,
		height: 150,
	},
	ScrollView: {
		flex: 1,
	}
});

export default App;