import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainInfo extends Component {
    render() {
        return(
            <View style={styles.contact_info}>
                <Text style={styles.main_text}>Павел Простяков</Text>
                <Text style={styles.main_text}>Стажёр-разработчик</Text>
                <Text style={styles.main_text}>Ростов-на-Дону</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_text: {
      color: 'black', 
      fontSize: 20,
      fontWeight: 'bold'
    },

    contact_info: {
      marginLeft: 10,
      marginRight: 10,
      flexDirection: 'column',
      justifyContent: 'space-around'
    },

    button: {
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 5,
      justifyContent: 'space-around',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'gray',
      shadowColor: 'cornflowerblue',
      shadowOffset: {
          width: 0,
          height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
    }
  });