import React, {useState} from 'react';
import {
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { LinearGradient } from "expo-linear-gradient";

export default function TopView() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['darkmagenta', 'darkmagenta', 'darkmagenta']}
        style={styles.container1}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.myPortfolio}>YOUR BALANCE</Text>
          <Ionicons name="refresh-outline" size={20} color="#fff" />
        </View>
        <Text style={styles.amount}>Rs.10,00,000</Text>
      </LinearGradient>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={styles.profit}
          onPress={() => setModalVisible(!modalVisible)}>

          <Text style={styles.profitText}>Profit</Text>
          <Text style={styles.profitAmt}>$2,00,000</Text>
          <Ionicons name="caret-up-outline" size={20} color="darkmagenta" />
          <Text style={styles.profitPercentage}>4.2%</Text>

        </Pressable>
      </Modal>

      <Pressable  style={styles.showProfit} onPress={() => setModalVisible(true)}>
        <Text style={styles.seeProfit}>YOUR PROFIT!</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: '8%',
    marginRight: '8%',
  },
  container1: {
    backgroundColor: 'darkmagenta',
    borderRadius: 20,
    padding: 20,
    paddingTop: 28,
    paddingBottom: 62,
  },
  myPortfolio: {
    color: '#ebf0ed',
    fontSize: 15,
    paddingRight: '65%',
  },
  amount: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
  },
  profit: {
    alignItems: 'center',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: '57%',
    position: 'absolute',
  
  },
  showProfit: {
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop:'31%',
    padding: 12,
    position: 'absolute',
    height:'43%',
    width:'95%'
  },
  seeProfit:{
    color:'darkmagenta',
    fontSize:20,
    fontWeight:'bold',
  },
  profitText: {
    fontSize: 18,
    paddingLeft: 6,
  },
  profitAmt: {
    paddingRight: 10,
    paddingLeft: '28%',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'darkmagenta',
  },
  profitPercentage: {
    color: '#000',
    fontSize: 15,
    paddingLeft: 3,
    paddingRight: 5,
  },
});