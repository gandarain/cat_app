import React from 'react'
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Routes from './Routes'
import ListCat from '../screen/listCat'
import DetailCat from '../screen/detailCat'

const Stack = createStackNavigator()

const stackNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.ListCat}
      component={ListCat}
      options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
    />
    <Stack.Screen
      name={Routes.DetailCat}
      component={DetailCat}
      options={{ headerShown: false, ...TransitionPresets.SlideFromRightIOS }}
    />
  </Stack.Navigator>
)

const Navigation = () => (
  <NavigationContainer>{stackNavigation()}</NavigationContainer>
)

export default Navigation
