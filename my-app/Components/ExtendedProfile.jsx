import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import AddInfo from './AddInfo';
import Element from './Element';

export default class ExtendedProfile extends Component {
    render() {
        return (
          <View style={styles.container}>
            <View style={styles.panel}>
            <Image style={{height: 22, width: 22, marginLeft: 2}} 
            source={require("C:\\Users\\matve\\OneDrive\\Desktop\\FastWork\\my-app\\assets\\back.png")} />
              <Text style={styles.text_resume}>Профиль</Text>
              <Button title=" "></Button>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.text}>
                Заполните дополнительные пункты резюме, чтобы мы могли быстрее
                и точнее подобрать вакансию именно для Вас!                
              </Text>
              <Element header={'Желаемое расписание:'} text={''} />
              <Element header={'О себе:'} text={''} />
              <View style={{marginTop: 10}}></View>
              <AddInfo question={'Хотели бы Вы получать предложения от иностранных компаний?'}
                answers={["Да", "Нет"]}></AddInfo>
              <AddInfo question={'Отправлять Ваше резюме нашим партнёрам?'}
                answers={["Да", "Нет"]}></AddInfo>
              <AddInfo question={'Предпочитаемый Вами способ проведения интервью:'}
                answers={["Лично", "Онлайн", "Без интервью"]}></AddInfo>
              <AddInfo question={'Хотели бы Вы получать предложения из другой профессиональной области?'}
                answers={["Да", "Нет"]}></AddInfo>
            </ScrollView>
            <View style={styles.panel}>
              <Button title="Лента"></Button>
              <Button title="Профиль"></Button>
              <Button title="Помощь"></Button>
            </View>
            <StatusBar style="auto" />
          </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      marginTop: 25, 
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  
    info: {
      marginTop: 5,
      marginLeft: 10,
      flexDirection: 'row',
      maxHeight: 120
    },
  
    image: {
      width: 120,
      height: 120,
      borderRadius: 100
    },
  
    panel: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottomColor: 'darkgray',
      borderBottomWidth: 1,
      borderTopColor: 'darkgray',
      borderTopWidth: 1,
      alignSelf: 'stretch',
    },
  
    text_resume: {
      color: 'cornflowerblue', 
      fontSize: 18,
      marginLeft: 8,
      marginRight: 4,
      marginTop: 4,
      marginBottom: 4,
      fontWeight: 'bold'
    },

    text: {
      color: 'black', 
      fontSize: 18,
      marginLeft: 10,
      marginRight: 4,
      marginTop: 8,
      marginBottom: 4,
      fontWeight: 'bold'
    }
  });