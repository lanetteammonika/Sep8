import React, { Component } from 'react';
import {
    Dimensions,
    Text,
    View
} from 'react-native';
import {Icon} from 'react-native-elements';
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;
const wi=w*0.708;

const CustomView = ({item}) => {
return(

            <View style={{backgroundColor:item.color,flex:1,justifyContent:'flex-end'}}>
                <View style={{justifyContent:'center',flex:1,alignItems:'center'}}>
                <View style={{justifyContent:'flex-start',margin:10,marginLeft:40,alignItems:'center', flexDirection:'row'}}>
                    <Icon
                        size={w*40/375}
                        name='ios-checkmark-circle-outline'
                        type='ionicon'
                        color='#FFF'
                    />
                    <View style={{margin:10,flex:1, flexDirection:'column'}}>
                        <View
                            style={{
                                backgroundColor:"#FFF",
                                width: w*150/375,
                                height:h*1/667
                            }}
                        />
                        <View
                            style={{
                                marginTop:10,
                                backgroundColor:"#FFF",
                                width: w*100/375,
                                height:h*1/667
                            }}
                        />
                    </View>
                </View>
                <View style={{justifyContent:'flex-start',margin:10,marginLeft:40,alignItems:'center', flexDirection:'row'}}>
                    <Icon
                        size={w*40/375}
                        name='ios-checkmark-circle-outline'
                        type='ionicon'
                        color='#FFF'
                    />
                    <View style={{margin:10,flex:1, flexDirection:'column'}}>
                        <View
                            style={{
                                backgroundColor:"#FFF",
                                width: w*150/375,
                                height:h*1/667
                            }}
                        />
                        <View
                            style={{
                                marginTop:10,
                                backgroundColor:"#FFF",
                                width: w*100/375,
                                height:h*1/667
                            }}
                        />
                    </View>
                </View>
                <View style={{justifyContent:'flex-start',margin:10,marginLeft:40,alignItems:'center', flexDirection:'row'}}>
                    <Icon
                        size={w*40/375}
                        name='ios-checkmark-circle-outline'
                        type='ionicon'
                        color='#FFF'
                    />
                    <View style={{margin:10,flex:1, flexDirection:'column'}}>
                        <View
                            style={{
                                backgroundColor:"#FFF",
                                width: w*150/375,
                                height:h*1/667
                            }}
                        />
                        <View
                            style={{
                                marginTop:10,
                                backgroundColor:"#FFF",
                                width: w*100/375,
                                height:h*1/667
                            }}
                        />
                    </View>
                </View>
                </View>
                <View
                    style={{backgroundColor:"#FFF",height:h*100/667,width:wi,alignItems:'center'}}
                >
                        <Text>{item.text}</Text>
                </View>

            </View>
)

}
export default CustomView;