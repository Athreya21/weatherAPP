import * as React from 'react';
import {
  Button,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Text,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
//import {SearchScreen} from './searchScreen';
import {SearchScreen} from './ApiScreen';
//import {SearchScreen1} from './ApiScreen';
const Stack = createStackNavigator();
export function FavouriteScreen({navigation}) {
  return (
    <ImageBackground
      style={styles.image}
      source={require('./background_android.png')}>
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={styles.backbutton}
              source={require('./icons8-left-24.png')}
              title="Back"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text}> Favourite </Text>
        </View>
        <View style={styles.top2}>
          <TouchableOpacity onPress={() => navigation.navigate(SearchScreen)}>
            <Image
              style={styles.search}
              source={require('./icons8-search-30.png')}
              title="search"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {/* <Button title="data list" onPress={() => dynamicData} /> */}
      </View>
      {/* for Blank */}
      <View style={styles.Blank}>
        <Image style={styles.Nothing} source={require('./icon_nothing.png')} />
        <Text style={styles.textEmpty}> No Favourite Added </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    //position: 'absolute',
    justifyContent: 'space-between',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 65,
    top: -160,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
  },
  Blank: {
    alignItems: 'center',
    height: 130,
    width: 167,
    justifyContent: 'center',
    right: -70,
  },
  Nothing: {alignItems: 'center', height: 84, width: 159, padding: 10},
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 360,
    height: 56,
    backgroundColor: '#FFF',
  },
  search: {flexDirection: 'row', marginRight: 8},
  backbutton: {marginLeft: 8},
  text: {
    flexDirection: 'row',
    alignContent: 'center',
    height: 24,
    width: 180,
    color: '#292F33',
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 24,
    textShadowColor: 'rgba(0,0,0,0.15)',
  },
  textEmpty: {
    height: 24,
    width: 180,
    color: '#FFF',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 21,
    textAlign: 'center',
  },
});
