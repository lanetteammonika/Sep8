import React,{ Component } from 'react';
import { View,Text } from 'react-native';
import {ImageCrop} from 'react-native-image-cropper'
class Image extends Component{
    constructor(props) {
        super(props);
        this.state = {
            image:"https://static.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg",
            width: 300,
            height: 300,
            zoom:20,
            img:false
        }
    }

    render(){
        if(!this.state.img) {
            return (
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <ImageCrop
                        ref={'cropper'}
                        image={this.state.image}
                        cropHeight={this.state.height}
                        cropWidth={this.state.width}
                        zoom={this.state.zoom}
                        maxZoom={80}
                        minZoom={20}
                        panToMove={true}
                        pinchToZoom={true}
                    />
                    <Text onPress={() => this.setState({img:true})}>Capture()</Text>

                </View>
            );
        }
        else{
            return(

            <View style={{flex:1,justifyContent:'center', alignItems: 'center'}}>

                <ImageCrop
                    ref={'cropper'}
                    image={this.state.image}
                    cropHeight={this.state.height}
                    cropWidth={this.state.width}
                    zoom={this.state.zoom}
                    maxZoom={80}
                    minZoom={20}
                    panToMove={true}
                    pinchToZoom={true}
                />
            </View>
            )
        }
    }
    capture = (next) => {
        debugger
        this.refs[next].crop()
            .then(base64 => console.log(base64))
    }
}
export default Image