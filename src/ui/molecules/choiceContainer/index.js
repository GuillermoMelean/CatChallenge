import React from 'react'

import ChoiceButton from '../../atoms/choiceButton'
import { Container } from './styles.js'

const ChoiceContainer = (props) => {
    return (
        <Container>
            <ChoiceButton onPress={props.onPressLeft} iconName="ios-close-outline" iconColor="red" iconSize={30} />
            <ChoiceButton onPress={props.onPressRight} iconName="ios-heart" iconColor="green" iconSize={30} />
        </Container>
    )
}

export default ChoiceContainer;