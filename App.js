import * as React from 'react';
import * as Speech from 'expo-speech';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  Alert
} from 'react-native';
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const speak = () => {
    const thingToSay = '';
    Speech.speak(thingToSay);
  };
  
  render() {
    return (
      <SafeAreaProvider>
      <View style={styles.container}>
      <Button title="Speak" onPress={speak} />

      style={styles.container}>
        <Header
          backgroundColor={'#9ACFFD'}
          centerComponent={{
            text: 'Text to speech',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      <Image
        style={styles.imageIcon}
        source={{uri:'https://www.clker.com/cliparts/P/a/H/w/Q/l/speaker-plain-md.png'}}/>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        Alert.alert("Input box cannot be empty!")
            }}>
    </View>
    </SafeAreaProvider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 100,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon:{
    width: 150,
    height: 120,
    marginLeft: 90
  }
});
