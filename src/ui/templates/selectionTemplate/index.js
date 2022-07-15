import React, { useEffect, useRef } from 'react'
import { View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';
import SwipeCard from '../../organisms/swipeCard';
import ChoiceContainer from '../../molecules/choiceContainer';
import Swiper from 'react-native-deck-swiper'
import Card from '../../atoms/card'
import OverlayLabel from '../../atoms/overlayLabel'
import styles from './styles'


export default SelectionTemplate = ({ photoCards }) => {
  let useSwiper = null
  let handleOnSwipedLeft = null
  let handleOnSwipedRight = null

  useEffect(() => {
    useSwiper = useRef(null).current
    handleOnSwipedLeft = () => useSwiper.swipeLeft()
    handleOnSwipedRight = () => useSwiper.swipeRight()
  })

  return (
    <View style={styles.container} >
      <View style={styles.swiperContainer}>
        <SwipeCard useSwiper={useSwiper} photoCards={photoCards} stylesContainer={styles.container} />
      </View>
      <ChoiceContainer onPressLeft={handleOnSwipedLeft} onPressRight={handleOnSwipedRight} />
    </View>
  )
}