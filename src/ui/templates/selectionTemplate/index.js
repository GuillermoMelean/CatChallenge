import React, { useRef } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import SwipeCard from '../../organisms/swipeCard';
import ChoiceContainer from '../../molecules/choiceContainer';
import Swiper from 'react-native-deck-swiper'
import Card from '../../atoms/card'
import OverlayLabel from '../../atoms/overlayLabel'
import styles from './styles'


export default SelectionTemplate = ({photoCards}) => {
  const useSwiper = useRef(null).current

  const handleOnSwipedLeft = () => useSwiper.swipeLeft()
  const handleOnSwipedRight = () => useSwiper.swipeRight()

  return (
    <View style={styles.container} >
      <View style={styles.swiperContainer}>
        <SwipeCard useSwiper={useSwiper} photoCards={photoCards} stylesContainer={styles.container}  />
      </View>
      <ChoiceContainer onPressLeft={handleOnSwipedLeft} onPressRight={handleOnSwipedRight}/>
    </View>
  )
}