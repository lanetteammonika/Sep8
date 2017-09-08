import React, { Component } from 'react';
import {View,StyleSheet,Button,Dimensions} from 'react-native';
import CustomView from './CustomView';
import CarouselCard from 'react-native-card-carousel';
const h=Dimensions.get('window').height;
const w=Dimensions.get('window').width;
// this.height = h-220;
// this.blockHeight = h-220;
const itemArr=[
    { text: 'Welcome to Job App',color:"#524CB0"},
    { text: 'Use this to Get a Job',color:"#CA4BC3"},
    { text: 'Set your location, then swipe away',color:"#45CAB5"}
];


class Card extends Component{
    componentWillMount(){
        console.log('height:',h);
        console.log('width:',w);
    }
    onClick(){
    }
render(){
    return(
<View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
    <Button
        title="Walkthrough"
        color="#000"
        onPress={()=>this.onClick()}
    />
    <View style={{height:h-220,marginTop:40}}>
<CarouselCard
    data = {itemArr}
onPress = {item => {}}
contentRender ={item => {
    return <CustomView item={item}/>;
}}
    />
    </View>
    <View style={{backgroundColor:'#F1F1F1',borderRadius:5,marginTop:15,width:80,justifyContent:'center',alignItems:'center'}}>
    <Button
        title="Got it"
        color="#000"
        onPress={()=>this.onClick()}
    />
    </View>
    </View>);
}
}
export default Card;
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
