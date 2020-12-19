import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const Face = ({icon, title, color}) => {
	return (
		<View style={styles.faceGrup}>
		   <Icon name={icon} size={30} color={color} />
		   <Text style={[styles.faceText, {color}]}>{title}</Text>
		 </View>
   );
};

const HomeScreen = () => {
	return (
	 <View style={styles.container}>
		<View style={styles.headercont}>
		  <Text style={styles.heading}> Welcome To Mojokerto </Text>
		  <Text style={styles.desc}> Kota Onde-Onde </Text>
		</View>
		<View style={styles.faceContainer}>
		   <Face icon="shopping-cart" title="Shopping" color="red" />
       	   <Face icon="bank" title="Instisusi" color="orange" />
       	   <Face icon="cutlery" title="Restoran" color="green" />
       	   <Face icon="credit-card" title="ATM" color="blue" />
           <Face icon="shopping-cart" title="Shopping" color="red" />
           <Face icon="bank" title="Instisusi" color="orange" />
           <Face icon="cutlery" title="Restoran" color="green" />
           <Face icon="credit-card" title="ATM" color="blue" />
	   </View>
	   <View>
	     <Image 
	     style={styles.foto}
	     source={require('./gambar/depan.jpg')} />
       <Image 
       style={styles.foto2}
       source={require('./gambar/mjk.jpg')} />
       <Image 
       style={styles.foto3}
       source={require('./gambar/Kabar.jpg')} />
	   </View>
    </View>
   );
};

export default HomeScreen;

const styles = StyleSheet.create({
  faceGrup: {
  	justifyContent: 'center',
  	alignItems: 'center', 
    marginRight: 25,
    marginTop: 15,
  },
  faceContainer: {
  	backgroundColor: '#fff',
  	padding: 20,
    flexDirection: 'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    borderRadius: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset : {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginTop: 20,
  },
  faceText: {
  	fontSize: 10,
  	marginTop: 6,
    // marginBottom: 3,
  },
  container: {
  	flex: 1
  },
  headercont: {
  	padding: 10,
  	paddingHorizontal: 10,
  	marginTop: 15,
  },
  heading: {
  	fontSize: 25,
  	fontWeight: 'bold',
  	color: '#fff',
  },
  desc: {
  	fontSize: 17,
  	fontWeight:'bold',
  	color: '#fff'
  },
  foto: {
    marginTop: 10,
    width: '96%',
    height: 120,
    borderRadius: 10,
    marginLeft: '2%',
    marginRight: '2%',
  },
  foto2: {
    marginTop: 10,
    width: '96%',
    height: 120,
    borderRadius: 10,
    marginLeft: '2%',
    marginRight: '2%',

  },
  foto3: {
    marginTop: 10,
    width: '96%',
    height: 120,
    borderRadius: 10,
    marginLeft: '2%',
    marginRight: '2%',
  },
});