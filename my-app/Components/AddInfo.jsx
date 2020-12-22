import React, { Component } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class AddInfo extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
        <>
        <Text style={styles.text}>{this.props.question}</Text>
        <View style={styles.buttonContainer}>
            {this.props.answers.map((answer) => {
                return (
                    <TouchableOpacity style={styles.button} key={answer}>
                        <Text style={styles.button_text}> {answer} </Text>
                    </TouchableOpacity>
                )
            })}
        </View>
        </>
    )}
};

const styles = StyleSheet.create({ 
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignContent: 'space-around',
        marginTop: 2
    },

    button_text: {
        fontSize: 16,
        marginLeft: 6,
        marginRight: 6,
        marginTop: 4,
        marginBottom: 4,
        color: 'blue'
    },

    text: {
        color: 'black', 
        fontSize: 18,
        marginLeft: 10,
        marginRight: 4,
        marginTop: 8,
        marginBottom: 4,
        fontWeight: 'bold'
      },

      button: {
          borderRadius: 6,
          marginLeft: 10,
          justifyContent: 'center',
          backgroundColor: '#bbb'
      }
})