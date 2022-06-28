import React, { useRef } from 'react'
import { View, Text } from 'react-native'

import Swiper from 'react-native-deck-swiper'
import photoCards from '../../../data/photoCards'
import Card from '../../atoms/card'
import OverlayLabel from '../../atoms/overlayLabel'
import ChoiceContainer from '../../molecules/choiceContainer'

import styles from './styles'

const SwiperCard = ({useSwiper, photoCards, stylesContainer}) => {     

    return ( 
        <Swiper
            ref={useSwiper}
            animateCardOpacity
            containerStyle={stylesContainer}
            cards={photoCards}
            renderCard={card => <Card card={card} />}
            cardIndex={0}
            backgroundColor="white"
            stackSize={2}
            infinite
            showSecondCard
            animateOverlayLabelsOpacity
            overlayLabels={{
                left: {
                    title: 'NOPE',
                    element: <OverlayLabel label="NOPE" color="#E5566D" />,
                    style: {
                        wrapper: styles.overlayWrapper,
                    },
                },
                right: {
                    title: 'LIKE',
                    element: <OverlayLabel label="LIKE" color="#4CCC93" />,
                    style: {
                        wrapper: {
                            ...styles.overlayWrapper,
                            alignItems: 'flex-start',
                            marginLeft: 30,
                        },
                    },
                },
            }}
        />
    )
};

export default SwiperCard
