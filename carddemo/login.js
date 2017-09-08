import React, { Component } from 'react';
import { Image,View,Text,Dimensions } from 'react-native';
const w=Dimensions.get('window').width;
const h=Dimensions.get('window').height;

class Login extends Component{
    render(){
        return(
            <View style={{flex:1,}}>
                <Image source={require('./1.jpeg')}
                       style={{height:h,width:w}}
                />
                <View style={{position:'absolute',top:0,left:0,right:0,bottom:0,backgroundColor:'rgba(69,202,181,0.7)'}}/>
            </View>

        );
    }
}
export default Login;