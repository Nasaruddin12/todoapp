import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Color from '../const/Color';

const Task = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <CheckBox
         
            value={props.isSelected}
            onValueChange={()=>props.setSelection(props.item.id)}
            style={styles.checkbox}
          />
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Color.secondary,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  square: {
   
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color:'#fff',
    fontSize:20,
    fontWeight:'bold'
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;