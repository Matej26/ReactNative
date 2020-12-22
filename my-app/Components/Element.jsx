import React, { Component } from 'react';
import { StyleSheet, Text, Linking, View} from 'react-native';

export default class Element extends Component {
    constructor(props) {
        super(props);
    };

    validateUrl(url) {
        return /^[a-z]+:\/\//i.test(url);
    };

    render() {
        if (this.validateUrl(this.props.text)) {
            return(
                <>
                <Text style={styles.header}> {this.props.header} </Text>
                <View style={styles.button}>
                    <Text onPress={() => Linking.openURL(this.props.text)} style={styles.text_resume_link}>{this.props.text}</Text>
                </View>
                </>
            );
        }
        else {
            return(
                <>
                <Text style={styles.header}>{this.props.header}</Text>
                <View style={styles.button}>
                    <Text style={styles.text_resume}>{this.props.text}</Text>
                </View>
                </>
            );
        }
    }
};

const styles = StyleSheet.create({
    header: {
        color: '#303030', 
        fontSize: 19,
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: 'bold'
      },
    
      text_resume: {
        color: '#888', 
        fontSize: 18,
        marginLeft: 8,
        marginRight: 4,
        marginTop: 4,
        marginBottom: 4,
        fontWeight: 'bold'
      },

      text_resume_link: {
        color: 'blue', 
        fontSize: 18,
        marginLeft: 8
      },

      button: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5,
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