import React from 'react';
import {Text,View,Modal} from 'react-native';
import { CardSection } from './CardSection';
import {Buttons} from './Buttons';

const ConfirmMail = ({children,visible,onAccept,onDecline}) =>{
    const {textStyle,cardSectionStyle,containerStyle}= styles;
    return(
        <Modal
            animationType="slide"
            onRequestClose={()=>{}}
            transparent
            visible={visible}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection style={cardSectionStyle}>

                    <Buttons onPress={onDecline}>Ok</Buttons>
                </CardSection>
            </View>
        </Modal>
    );

}
const styles={
    cardSectionStyle:{
        justifyContent:'center'
    },
    textStyle:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        lineHeight:40
    },
    containerStyle:{
        backgroundColor:'rgba(0,0,0,0.75)',
        position:'relative',
        flex:1,
        justifyContent:'center'
    }
}



export {ConfirmMail};