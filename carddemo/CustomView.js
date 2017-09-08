import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View
} from 'react-native';
const w=Dimensions.get('window').width;
const CustomView = ({item}) => {
return(
            <View style={{backgroundColor:item.color,flex:1,justifyContent:'flex-end'}}>

                <View
                    style={{backgroundColor:"#FFF",height:100,width:w}}
                >
                    <Text>{item.text}</Text>
                </View>
            </View>
)

}
export default CustomView;