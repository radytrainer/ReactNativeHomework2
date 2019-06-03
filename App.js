
 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View} from 'react-native';
 import { Card } from './src/Card'
 import { 
  Container, 
  Header,
  Title,
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon,
  List,
  ListItem,
  Thumbnail,
 } from 'native-base';
 export default class App extends Component {
    state = {
      students: [
        {
          name: "Bopha",
          image: 'https://s2.best-wallpaper.net/wallpaper/3840x2160/1610/Asian-girl-sit-at-swing-white-dress-books_3840x2160.jpg',
          text: "She is a good students and beautiful girl"
        },
        {
          name: "Chompey",
          image: 'https://s2.best-wallpaper.net/wallpaper/3840x2160/1610/Asian-girl-sit-at-swing-white-dress-books_3840x2160.jpg',
          text: "She is a good students and beautiful girl"
        },
        {
          name: "Pheakdey",
          image: 'https://s2.best-wallpaper.net/wallpaper/3840x2160/1610/Asian-girl-sit-at-swing-white-dress-books_3840x2160.jpg',
          text: "She is a good students and beautiful girl"
        },
        {
          name: "Sophea",
          image: 'https://s2.best-wallpaper.net/wallpaper/3840x2160/1610/Asian-girl-sit-at-swing-white-dress-books_3840x2160.jpg',
          text: "She is a good students and beautiful girl"
        },
        {
          name: "Sokhey",
          image: 'https://s2.best-wallpaper.net/wallpaper/3840x2160/1610/Asian-girl-sit-at-swing-white-dress-books_3840x2160.jpg',
          text: "She is a good students and beautiful girl"
        },
      ]
    }
  render() {
    return (
      <Container>
            <Header>
            <Left>
              <Button transparent>
                 <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>Homework 2 </Title>
            </Body>
            <Right />
            </Header>
            <Content>
              {this.state.students.forEach(student => {
               
                <Card students={this.state.student.name} 
                      students={this.state.student.image} 
                      students={this.state.student.text} />
              })
              }
              

            </Content>
            <Footer>
                <FooterTab>
                  <Button>
                    <Icon name="apps" />
                  </Button>
                  <Button active>
                    <Icon active name="camera" />
                  </Button>
                  <Button>
                    <Icon name="navigate" />
                  </Button>
                  <Button>
                    <Icon name="person" />
                  </Button>
                </FooterTab>
              </Footer>
            
          </Container>
          
    );
   
  }
}
