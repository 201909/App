import * as React from 'react';
import { View, Text, Button,StyleSheet, TouchableOpacity } from 'react-native';
import ScreenOne from '../screens/ScreenTwo'
import { Ionicons } from '@expo/vector-icons';


export default class  ScreenTwo extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.container}>

        <TouchableOpacity style={styles.control} onPress={this.handlePreviousTrack}>
						<Ionicons name="play-skip-back-sharp"size={48} color='#fff' />
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handlePlayPause}>
						{this.state.isPlaying ? (
							<Ionicons name='pause-circle-sharp' size={70} color='#fff' />
						) : (
							<Ionicons name='play-circle-sharp' size={70} color='#fff' />
						)}
					</TouchableOpacity>
					<TouchableOpacity style={styles.control} onPress={this.handleNextTrack}>
						<Ionicons name="play-skip-forward-sharp" size={48} color='#fff' />
					</TouchableOpacity>

        </View>
      </View>
    )
  }
}