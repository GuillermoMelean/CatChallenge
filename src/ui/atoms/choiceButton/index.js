import React, { useState } from 'react';
import { ButtonContainer } from './styles'
import { Ionicons } from '@expo/vector-icons';

const ChoiceButton = (props) => {

    var [isPress, setIsPress] = useState(false);

    return (
        <ButtonContainer
            onPress={props.onPress}
            underlayColor={props.iconColor}
            onHideUnderlay={() => setIsPress(false)}
            onShowUnderlay={() => setIsPress(true)}
        >
            <Ionicons style={{}} name={props.iconName} size={props.iconSize} color={isPress ? 'white' : props.iconColor} />
        </ButtonContainer>
    );
};

export default ChoiceButton;
