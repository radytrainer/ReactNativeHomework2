import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
class Flatlists extends Component {
    state = {
        data: [
            {key: "One"},
            {key: "Two"},
            {key: "Three"}
        ],
        students: [
            {key: "Bopha"},
            {key: "Romdul"},
            {key: "Chompey"},
            {key: "Kolab"},
            {key: "Borin"},
            {key: "Bora"},
            {key: "Borith"},
            {key: "Mles"},
            {key: "Mealea"},
        ]
    }
    render() {
        return(
          <View style={styles.container}>
              <Text style={styles.fontStyle}>List</Text>
              <FlatList 
                    data={this.state.data}
                    horizontal={true}
                    renderItem={({item}) => <Text style={styles.fontStyle}>{item.key}</Text>}
              />
               <FlatList 
                    data={this.state.students}
                    renderItem={({item}) => <Text style={styles.fontStyle}>{item.key}</Text>}
              />
              <ActivityIndicator 
                 size={"large"}
                 color={"white"}
                 animating={true}
              />
          </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 10,
        backgroundColor: "#ff33aa",
    },
    fontStyle: {
        fontSize: 30,
        color:"#fff",
    }
});
export default Flatlists;