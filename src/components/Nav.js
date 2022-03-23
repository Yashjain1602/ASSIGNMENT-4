import React from 'react';
import {StyleSheet, ActivityIndicator, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Nav(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginTop:0
      }}>
      <Icon name="user-circle" size={40} color="darkmagenta" />
      <View style={styles.container}>
        <Text style={styles.line1}>Hi {props.name}</Text>
        <View style={{flexDirection: 'row',}}>
          <Text style={styles.line2}>YOUR INVESTEMENTS IN </Text>
          <Text style={styles.lineMid}>
            {props.numOfPortfolios}
          </Text>
          <Text style={styles.line2}> COMPANIES ARE:</Text>
        </View>
      </View>
      <Icon name="bell" size={30} color="darkmagenta" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    paddingLeft: 75,
    paddingRight: 75,
  },
  line1: {
    color: '#000',
    fontWeight: '600',
  },
  lineMid: {
    fontSize: 15,
    paddingBottom: 8,
    fontWeight: 'bold', 
    color: '#000'
  },
  line2: {
    fontSize: 15,
    paddingBottom: 8,
  },
});