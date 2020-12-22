import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import MainInfo from './MainInfo';
import Element from './Element';

export default class Profile extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.panel}>
            <Button title=" "></Button>
            <Text style={styles.text_resume}>Профиль</Text>
            <Image style={{height: 22, width: 22, marginRight: 2}} 
            source={require("C:\\Users\\matve\\OneDrive\\Desktop\\FastWork\\my-app\\assets\\settings.png")} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.info}>
              <Image style={styles.image} source={require("C:\\Users\\matve\\OneDrive\\Desktop\\FastWork\\my-app\\assets\\user.jpg")} />
              <MainInfo></MainInfo>
            </View>
            <Element header={'Сфера деятельности:'} 
            text={'Программирование, физика в играх, прикладная математика'} />
            <Element header={'Специализация:'}
            text={'Разработка ПО, backend, frontend, разработка мобильных приложений на iOS, Android, разработка игр на Unity'}  />
            <Element header={'Образование:'}
            text={'Бакалавриат ЮФУ по направлению "Прикладная математика и информатика",' + 
            ' магистратура ЮФУ по направлению "Разработка мобильных приложений и компьютерных игр"'} />
            <Element header={'Навыки в Вашей сфере деятельности:'}
            text={'Java Core(8), Java Spring, Python 3, Django, .Net(C#), вёрстка JavaScript, CSS, HTML'} />
            <Element header={'Существующие проекты, если есть:'}
            text={'https://github.com/SuperPasha'} />
            <Element header={'Иностранные языки:'}
            text={'Английский (intermediate)'} />
            <Element header={'Желаемое расписание:'}
            text={'20 часов в неделю, работа после обеда по 4 часа в день, либо 2 полных дня(среда, пятница)' + 
            ' и один после обеда(среда или четверг)'} />
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
  });
  