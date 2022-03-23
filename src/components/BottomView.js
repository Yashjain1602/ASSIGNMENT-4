import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const companyOptions=[
  {
    symbol:"R",
    name:"RELIANCE",
    amount:"Rs.2,00,000",
    subName:"REL",
    profit:"+20,000.0(10%)"
  },
  {
    symbol:"T",
    name:"TCS",
    amount:"Rs.2,00,000",
    subName:"TCS",
    profit:"+20,000.0(10%)"
  },
  {
    symbol:"B",
    name:"BAJAJ",
    amount:"Rs.2,00,000",
    subName:"BAJAJ",
    profit:"+20,000.0(10%)"
  },
  {
    symbol:"W",
    name:"WIPRO",
    amount:"Rs.2,00,000",
    subName:"wipro",
    profit:"+20,000.0(10%)"
  },

]

export default function BottomView() {

  const Block = props => {
    return (
      <View style={styles.box}>
        <View style={styles.symbolBox}>
          <Text style={styles.symbolText}>{props.symbol}</Text>
        </View>
        <View style={styles.subContainer}>
          <View style={styles.stock1}>
            <Text style={styles.name}>{props.name}</Text>
            <View style={styles.absStyle}>
              <Text style={styles.profit}>{props.amount}</Text>
            </View>
          </View>
          <View style={styles.subStock1}>
            <Text style={styles.subName}>{props.subName}</Text>
            <View style={styles.absStyle2}>
              <Text style={styles.profitPercentage}>{props.profit}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.bar} />
      <Text style={styles.stock}>YOUR INVESTMENTS</Text>
      {companyOptions.map(obj => (
      <Block
        symbol={obj.symbol}
        name={obj.name}
        amount={obj.amount}
        subName={obj.subName}
        profit={obj.profit}
        key={obj.name}
      />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 10,
    paddingLeft: '8%',
    paddingRight: '8%',
  },
  bar: {
    backgroundColor: '#a3aaa4',
    height: '0.4%',
    width: '10%',
    alignSelf: 'center',
    marginTop: 4,
    borderRadius: 25,
  },
  stock: {
    color: '#000',
    paddingBottom: '6%',
    paddingTop: '5%',
    fontFamily: 'sans-serif-light',
    fontSize: 16,
  },
  stock1: {
    flexDirection: 'row',
    paddingBottom: '4%',
  },
  subStock1: {
    flexDirection: 'row',
  },
  symbolBox: {
    flexDirection: 'row',
    backgroundColor: 'black',
    width: '20%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 13,
  },
  symbolText: {
    color: 'blueviolet',
    fontFamily: 'sans-serif-light',
    fontWeight: 'bold',
    fontSize: 30,
  },
  box: {
    backgroundColor: '#fff',
    padding: 10,
    fontFamily: 'sans-serif-light',
    borderRadius: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    paddingLeft: '6%',
  },
  name: {
    color: 'blueviolet',
    fontFamily: 'sans-serif-light',
    fontSize: 22,
    fontWeight: 'bold',
  },
  profit: {
    color: 'blueviolet',
    fontFamily: 'sans-serif-light',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  absStyle: {
    position: 'absolute',
    marginLeft: 160,
  },
  absStyle2: {
    position: 'absolute',
    marginLeft: 177,
  },
  subName:{
    fontSize:11
  },
  profitPercentage:{
    fontSize:11,
    color:'blueviolet'
  }
});