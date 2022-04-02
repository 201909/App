import * as React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import ScreenTwo from '../screens/ScreenTwo'


export default class  ScreenOne extends React.Component{
  render(){
    return(
      <View style={{flex:1, justifyContent:"center", borderWidth:25, borderColor:"orange"}}>
        <Button title = "go to screen 2" onPress={()=>
          this.props.navigation.navigate('ScreenTwo')
        }>
          
        </Button>
      </View>
    )
  }
}