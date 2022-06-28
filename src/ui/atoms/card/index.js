import React from 'react'
import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './styles'

const Card = ({ card }) => (
    <View
        activeOpacity={1}
        style={styles.card}
    >
        <Image
            style={styles.image}
            source={card.photo}
            resizeMode="cover"
        />
        <View style={styles.photoDescriptionContainer}>
            <View style={styles.photoInsideContainer}>
                <Text style={styles.name}>
                    {card.name}
                </Text>
                <Text style={styles.age}>
                    {`${card.age}`}
                </Text>
            </View>
            <View style={styles.photoInsideContainer}>
                <Text style={styles.breed}>
                    {card.breed}
                </Text> 
            </View>
        </View>
    </View>
)

Card.propTypes = {
    card: shape({
        photo: ImageSourcePropType,
        name: string,
        age: number,
    }).isRequired,
}
export default Card
