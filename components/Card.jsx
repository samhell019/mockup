import { View, StyleSheet, Dimensions, Text, Pressable  } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import Checkbox from './MyCheckbox';

export const Card = () => {

  const navigation = useNavigation();

  const handleStatsClick = () => {
    navigation.navigate('Stats');
  };

  const handleProhlednout = () => {
    navigation.navigate('Prohlednout');
  };

  const handleTrenovat = () => {
    navigation.navigate('Trenovat');
  };
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);
  const [isSelected3, setSelection3] = useState(false);

  const CheckBoxChange = (value) => {
    if (value == 1) {
      setSelection1(!isSelected1);
      setSelection2(false);
      setSelection3(false);
    } else if (value == 2) {
      setSelection2(!isSelected2);
      setSelection1(false);
      setSelection3(false);
    } else if (value == 3) {
      setSelection3(!isSelected3);
      setSelection1(false);
      setSelection2(false);

    }
  }
  return <View style={styles.card}>
    <Pressable style={styles.up} onPress={handleStatsClick}>
    <View>
      <Text style={styles.nadpis}>Lekce 1</Text>
    </View>
    </Pressable>
    <View style={styles.down}>
      <Text style={styles.obtiznost}>Obtížnost</Text>
      <View>
      </View>
      <View style={styles.zbytek}>
        <View style={styles.half}>
          <View style={styles.checkbox2}>
          <Checkbox/>
            <Text style={styles.jmenoObtiznost}>Lehká</Text>
          </View>
          <View style={styles.checkbox2}>
          <Checkbox/>
            <Text style={styles.jmenoObtiznost}>Střední</Text>
          </View>
          <View style={styles.checkbox2}>
            <Checkbox/>
            <Text style={styles.jmenoObtiznost}>Těžká</Text>
          </View>
        </View>
        <View style={styles.half}>
          <Pressable style={styles.button2} onPress={handleProhlednout}>
            <Text style={styles.text2}>Prohlédnout</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={handleTrenovat}>
            <Text style={styles.text}>Trénovat</Text>
          </Pressable>
        </View>
      </View>
    </View>
  </View>;
}

export default Card;


const styles = StyleSheet.create({
  card: {
     width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.25,
    marginTop: 20,

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: 25,
    borderRadius: 7,
    position: 'absolute',
    bottom: -20,
    left: 20,
    backgroundColor: '#08348c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
    height: 25,
    borderRadius: 7,
    position: 'absolute',
    bottom: 10,
    left: 20,
    frameColor: '#112449',
    backgroundColor: '#100c14',
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'white',
  },
  nadpis: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15
  },
  obtiznost: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
    marginTop: 10
  },
  half: {
    width: '50%',
  },
  tlacitka: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tlacitko: {
    width: '100%',
    height: '50%',
    backgroundColor: '#08348c',
    backgroundColor: 'red',
  },
  zbytek: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  checkbox: {
    marginLeft: 20,
    marginTop: 7,
    backgroundColor: '#17181a',
  },
  checkbox2: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  jmenoObtiznost: {
    color: 'white',
    fontSize: 20,
    marginLeft: 15,
  },
  up: {
    backgroundColor: '#08348c',
    width: '100%',
    height: '25%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  down: {
    backgroundColor: '#17181a',
    width: '100%',
    height: '75%',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
});