import React, { useState } from 'react'; 
import { View, TouchableOpacity, StyleSheet } from 'react-native'; 
import { Colors } from '../styles'; 
const Checkbox = () => { 
    const [isChecked, setIsChecked] = useState(false); 
    const toggleCheckbox = () => setIsChecked(!isChecked); 

    return ( 
        <TouchableOpacity 
        onPress={toggleCheckbox} 
        style={styles.checkbox}> 
        {isChecked && <View style={styles.checkmark} />} 
        </TouchableOpacity> 
        ); 
    }; 
    
    const styles = StyleSheet.create({ 
        checkbox: { 
            width: 20, 
            height: 20, 
            borderRadius: 5, 
            borderWidth: 2, 
            justifyContent: 'center', 
            alignItems: 'center', 
            borderColor: '#053286', 
            backgroundColor: '#141c1c', 
        }, 
        checkmark: { 
            width: 10, 
            height: 10, 
            borderRadius: 5 ,
            backgroundColor: 2, 
        }, 
    }); 
    
    export default Checkbox;