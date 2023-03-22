import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Words = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Anglická slovíčka</Text>
        <Text style={styles.lesson}>Lekce 1</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Překlad</Text>
          <Text style={styles.label}>Překlad</Text>
          <Text style={styles.label}>Překlad</Text>
          <Text style={styles.label}>Překlad</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
          <Text style={styles.label}>SLOVÍČKO</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
          <Text style={styles.label}>/Výslovnost/</Text>
        </View>
        <View style={styles.column}>
            <Text style={styles.label}>Překlad</Text>
            <Text style={styles.label}>Překlad</Text>
            <Text style={styles.label}>Překlad</Text>
            <Text style={styles.label}>Překlad</Text>
        </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#02318d',
      paddingTop: 20,
      paddingHorizontal: 20,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    headerText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    lesson: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    column: {
      flex: 1,
      justifyContent: 'space-between',
      marginRight: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    label: {
      color: '#fff',
      fontSize: 16,
    },
  });

export default Words;