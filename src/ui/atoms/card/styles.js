import { StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
export default StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    height: height - 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: 50,
    borderTopLeftRadius: 15,
    borderTopRightRadius:15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    width: '80%',
    position: 'absolute',
    left: '10%',
    bottom: 0,
    backgroundColor:'white'
  },

  photoInsideContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%',
  },
  name: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Avenir', 
    fontWeight: 'bold'
  },
  age: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'Avenir', 
    fontWeight: 'bold'
  },
  breed: {
    textAlign: 'center',
    fontSize: 13,
    color: 'black',
    fontFamily: 'Avenir', 
  },
})
