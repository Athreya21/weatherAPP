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
  TouchableOpacityBase,
} from 'react-native';
import {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {set} from 'react-native-reanimated';
import {useEffect} from 'react/cjs/react.development';

export default function DynamicList(params) {
  var initialElements = [
    {id: '0', text: 'Object 1'},
    {id: '1', text: 'Object 2'},
  ];
  const [exampleState, setExampleState] = useState(initialElements);
  const [count, setCount] = useState(0);
  const [pressed, setPressed] = useState(false);
  const addElement = (count) => {
    //setCount(count + 1);
    console.log(count);
    var newArray = [
      ...initialElements,
      {id: `${count}`, text: `object ${count}`},
    ];
    setExampleState(newArray);
  };
  useEffect(() => {}, []);

  const print = () => {
    if (pressed) {
      return <Text></Text>;
    }
    return <Text></Text>;
  };
  return (
    <View style={styles.container2}>
      <Button title="Add count" onPress={() => setCount(count + 1)} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={exampleState}
        renderItem={(item) => <Text>{item.item.text}</Text>}
      />
      <Text>{count}</Text>
      <Button
        title="Add element"
        onPress={() => {
          addElement;
        }}
      />
      <View style={styles.rectangle}>
        <TouchableOpacity onPress={() => setPressed(true)}>
          <Text style={pressed ? styles.box1 : styles.box2}>R</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setPressed(false);
            //print();
          }}>
          <Text style={pressed ? styles.box2 : styles.box1}>B{print()}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,
  },
  rectangle: {
    left: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    //backgroundColor: '#000',
    //color: '#000',
    height: 50,
    width: 100,
    borderRadius: 5,
  },
  box1: {
    backgroundColor: '#333',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  box2: {
    backgroundColor: '#fff',
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
});
