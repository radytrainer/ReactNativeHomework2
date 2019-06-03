import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
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

const Card = (props) => {
        const { students } = props;
        return (
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail style={styles.image} square source={{ uri: students.image }} />
                  </Left>
                  <Body>
                    <Text>{ students.name }</Text>
                    <Text note numberOfLines={1}>{ students.text }</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List> 
           );
       
      }
    const styles = StyleSheet.create({
      image: {
        width: 100,
        height: 70,
      }
    });


export { Card }

// props type :  research .. for homework
// libray : native base


