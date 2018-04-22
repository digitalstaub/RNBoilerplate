import React from "react";
import {StackNavigator} from "react-navigation";
import HomeScreen from '../containers/HomeScreen'
import SettingsScreen from '../containers/SettingsScreen'

// screens identified by the router
import {Animated, Easing} from "react-native"

const PrimaryNav = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Settings: {
    screen: SettingsScreen
  }
}, {
  initialRouteName: "Home",
  headerMode: "none",
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0
    }
  })
});

export default PrimaryNav;
