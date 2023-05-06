import { StyleSheet, Platform } from 'react-native'

import { fontFamily, fontSize } from '../../constant/font'
import color from '../../constant/color'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background
  },
  cardContainer: {
    backgroundColor: color.white,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: Platform.OS === 'android' ? 0.4 : 0.1,
    shadowRadius: 5,
    marginHorizontal: 15,
    marginVertical: 15
  },
  cardContent: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 10
  },
  cardTitle: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between'
  },
  linkIcon: {
    size: fontSize.BIG,
    color: color.theme
  },
  textTitle: {
    color: color.font,
    fontSize: fontSize.BIG,
    fontFamily: fontFamily.BOLD
  },
  textSubTitle: {
    color: color.font,
    fontSize: fontSize.SMALL,
    fontFamily: fontFamily.REGULAR
  },
  textDescription: {
    color: color.font,
    fontSize: fontSize.MEDIUM,
    fontFamily: fontFamily.SEMI_BOLD
  }
})

export default styles
