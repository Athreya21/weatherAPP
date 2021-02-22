import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import DATA from './mockData';

import {useState} from 'react';

const Item = ({area, icon, desc, temperature}) => {
  const [flag, setFlag] = useState('./icon_favourite.png');
  return (
    <View style={styles.item}>
      <Text style={styles.area}>{area}</Text>
      <View style={styles.report}>
        <Image style={styles.icon}></Image>
        <Text style={styles.temperature}>{temperature}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
      <TouchableOpacity onPress={() => setFlag('./icon_humidity_info.png')}>
        <Image
          source={require('./icon_favourite.png')}
          style={styles.favourite}
        />
      </TouchableOpacity>
    </View>
  );
};

const App1 = () => {
  const renderItem = ({item}) => (
    <Item area={item.area} desc={item.desc} temperature={item.temperature} />
  );

  return (
    <ImageBackground
      style={styles.image}
      source={require('./background_android.png')}>
      {/* Recent search */}
      <View style={styles.header}>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}>
            <Image
              style={styles.backbutton}
              source={require('./icons8-left-24.png')}
              title="Back"
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.text} placeholder=" Recent Search " />
        </View>
        <View style={styles.top2}>
          <TouchableOpacity
            onPress={() => navigation.navigate(RecentSearchScreen)}>
            <Image
              style={styles.search}
              source={require('./icons8-search-30.png')}
              title="search"
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.about}>
        <Text style={styles.aboutPage}>You recently searched for</Text>
        <Text
          style={styles.clear}
          onPress={() =>
            alert('Are you sure want to remove the  search list?')
          }>
          Clear All
        </Text>
      </View>
      <View style={styles.Box}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(256,256,256,0.9)',
    height: 55,
    top: 15,
  },
  backButton: {marginLeft: 15},
  top2: {marginRight: 15},

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
  search: {flexDirection: 'row'},
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
  //recent search is above
  about: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,
  },
  aboutPage: {color: '#fff'},
  clear: {color: '#fff'},
  Box: {marginTop: 5, paddingBottom: 10, height: 450},
  item: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 15,
    marginVertical: 1,
    marginStart: 12,
    // marginEnd: 1,
    width: 295,
    height: 80,
    top: 5,
  },
  report: {flexDirection: 'row', width: 167, height: 23, padding: 13},
  icon: {height: 22, width: 25},
  temperature: {
    height: 16,
    width: 84,
    color: '#fff',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 17,
  },
  desc: {
    // padding: 2,
    height: 16,
    width: 100,
    color: '#fff',
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: 16,
  },
  area: {
    height: 18,
    width: 123,
    color: '#FFE539',
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 18,
  },
  favourite: {
    marginLeft: 245,
    top: -35,
    height: 22,
    width: 22,
  },
});

export default App1;
