// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CarouselCard from 'react-native-card-carousel'
import CustomView from './CustomView'
import Login from './image';

// const itemArr=[
//     { text: 'Welcome to Job App',color:"#524CB0"},
//     { text: 'Use this to Get a Job',color:"#CA4BC3"},
//     { text: 'Set your location, then swipe away',color:"#45CAB5"}
// ];
//
//
export default class carddemo extends Component {
  render() {
    return (

      <Login />
    );
  }
}
// {/*<View style={styles.container}>*/}
// {/*<CarouselCard*/}
// {/*data = {itemArr}*/}
// {/*onPress = {item => {}}*/}
// {/*contentRender = {item => {*/}
// {/*return <CustomView item = {item} />;*/}
// {/*}}*/}
// {/*/>*/}
// {/*</View>*/}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//       marginTop:60,
//     justifyContent: 'center',
//     alignItems: 'center',
//
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     Modal,
//     Dimensions
// } from 'react-native';
//
// import ImageZoom from 'react-native-image-pan-zoom';
// const w=Dimensions.get('window').width;
// const h=Dimensions.get('window').height;
// class Image extends React.Component {
//     render() {
//     return (
//         <View>
//         <ImageZoom cropWidth={300}
//                     cropHeight={500}
//                     imageWidth={200}
//                     imageHeight={200}>
//             <Image style={{width:null, height:null, flex:1}}
//                     source={{uri:'http://v1.qzone.cc/avatar/201407/07/00/24/53b9782c444ca987.jpg!200x200.jpg'}}
//             />
//         </ImageZoom>
//         </View>
// )
// }
// }
AppRegistry.registerComponent('carddemo', () => carddemo);
