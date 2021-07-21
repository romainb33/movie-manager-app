import React, { Component } from 'react'
import { StyleSheet, View, Button, TextInput } from 'react-native'

export class Search extends Component {
    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder="Titre du film"/>
                <Button title="rechercher" onPress={() => {}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
    }
  });

export default Search
