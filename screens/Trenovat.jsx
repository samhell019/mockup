import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions, Modal } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { width, height } = Dimensions.get('window');

export const words = [  
  {"id":0, "cs":"pláž","en":"beach ", "pron":"/biːtʃ/" },  
            {"id":1, "cs":"věřit","en":"believe ", "pron":"/bɪˈliːv/" },
            {"id":2, "cs":"jízdní kolo","en":"bike ", "pron":"/baɪk/" },
            {"id":3, "cs":"loď","en":"boat ", "pron":"/bəʊt/" },
            {"id":4, "cs":"znuděný","en":"bored ", "pron":"/bɔːd/" },
            {"id":5, "cs":"kavárna","en":"café ", "pron":"/ˈkæfeɪ/" },
            {"id":6, "cs":"auto","en":"car ", "pron":"/kɑː(r)/" },
            {"id":7, "cs":"nenávist","en":"hate ", "pron":"/heɪt/" },
            {"id":8, "cs":"znát","en":"know ", "pron":"/nəʊ/" },
            {"id":9, "cs":"mít rád","en":"like ", "pron":"/laɪk/" },
            {"id":10,"cs":"milovat","en":"love ", "pron":"/lʌv/"},
            {"id":11,"cs":"trh","en":"market ", "pron":"/ˈmɑːkɪt/"},
            {"id":12,"cs":"mít raději","en":"prefer ", "pron":"/prɪˈfɜː(r)/"},
            {"id":13,"cs":"restaurace","en":"restaurant ", "pron":"/ˈrestrɒnt/"},
            {"id":14,"cs":"nakupování","en":"shopping ", "pron":"/ˈʃɒpɪŋ/"},
            {"id":15,"cs":"plavání","en":"swimming ", "pron":"/ˈswɪmɪŋ/"},
            {"id":16,"cs":"divadlo","en":"theatre ", "pron":"/ˈθɪətə(r)/"},
            {"id":17,"cs":"návštívit","en":"visit ", "pron":"/ˈvɪzɪt/"},
            {"id":18,"cs":"Procházka","en":"walk ", "pron":"/wɔːk/"},
            {"id":19,"cs":"Basketball","en":"basketball ", "pron":"/ˈbɑːskɪtbɔːl/"}
]

export const Trenovat = () => {
  const navigation = useNavigation();
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showResultPopup, setShowResultPopup] = useState(false)

  const handleOptionPress = (optionIndex) => {
    setSelectedOptionIndex(optionIndex)

    if (optionIndex === getCorrectOptionIndex()) {
      setCorrectAnswers(correctAnswers + 1)
      showAlert('Správně!')
    } else {
      showAlert('Špatně!')
    }
  }

  const handleNextWordPress = () => {
    setSelectedOptionIndex(-1)
    if (currentWordIndex === words.length - 1) {
      setShowResultPopup(true)
    } else {
      setCurrentWordIndex(currentWordIndex + 1)
    }
  }

  const handleRestartPress = () => {
    setCurrentWordIndex(0)
    setSelectedOptionIndex(-1)
    setCorrectAnswers(0)
    setShowResultPopup(false)
  }

  const showAlert = (message) => {
    Alert.alert(
      message,
      '',
      [{ text: 'OK' }],
      { cancelable: false }
    )
  }

  const getCorrectOptionIndex = () => {
    const currentWord = words[currentWordIndex]
    return currentWord.czech === options[0] ? 0 : 1
  }

  const options = selectedOptionIndex === -1 ? 
    [words[currentWordIndex].czech, ''] :
    [selectedOptionIndex === 0 ? words[currentWordIndex].czech : words[currentWordIndex - 1].czech, 
     selectedOptionIndex === 1 ? words[currentWordIndex].czech : words[currentWordIndex - 1].czech]
     const [modalVisible, setModalVisible] = useState(false);


     const handleClick = () => {
      setModalVisible(true);
     }
  return (
    <View style={styles.container}>
          <Modal visible={modalVisible}       animationType="slide"
      transparent={true}>
        <View style={{ width: '60%', height : '10%', position: 'absolute', top: '40%', left: '20%', backgroundColor: 'green', borderRadius: 10}}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>Správně!</Text>
          <TouchableOpacity style={styles.tlacitko} onPress={() => setModalVisible(false)}>
            <Text style={styles.texttlacitko}>Zavřít</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Text style={styles.text}>Anglická slovíčka</Text>
      {showResultPopup ? (
        <View >
          <Text >
            {`Správně: ${correctAnswers} / ${words.length}`}
          </Text>
          <TouchableOpacity  onPress={handleRestartPress}>
            <Text >Opakovat</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View >
        
          <Text >slovo</Text>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko} >preklad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko}>preklad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko}>preklad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko}>preklad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko} >preklad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tlacitko} onPress={() => handleClick()}>
            <Text style={styles.texttlacitko} >preklad</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>

    
    // <View style={styles.container}>
    //   {showResultPopup ? (
    //     <View style={styles.popupContainer}>
    //       <Text style={styles.popupText}>
    //         {`Správně: ${correctAnswers} / ${words.length}`}
    //       </Text>
    //       <TouchableOpacity style={styles.popupButton} onPress={handleRestartPress}>
    //         <Text style={styles.popupButtonText}>Opakovat</Text>
    //       </TouchableOpacity>
    //     </View>
    //   ) : (
    //     <View style={styles.wordContainer}>
    //       <Text style={styles.englishText}>{words[currentWordIndex].english}</Text>
    //       <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress(0)}>
    //         <Text style={styles.optionText}>{options[0]}</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.optionButton} onPress={() => handleOptionPress(1)}>
    //         <Text style={styles.optionText}>{options[1]}</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity style={styles.nextButton} onPress={handleNextWordPress}>
    //         <Text style={styles.nextButtonText}>Další</Text>
    //       </TouchableOpacity>
    //     </View>
    //   )}
    // </View>
  )
}
export default Trenovat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0e12',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  tlacitko:{

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },
  texttlacitko:{
    fontSize: 20,
    color: '#ffff',
  },
  text: { 
    color: '#ebecee',
    fontSize: height * 0.05,
    position: 'absolute',
    top: 0,
    left: 0,
    paddingLeft: width * 0.05,
    marginTop: height * 0.02,
  },
});
