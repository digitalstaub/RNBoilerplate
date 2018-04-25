import React from "react";
import {TabNavigator} from "react-navigation";
import {Icon} from 'native-base';
import HomeScreen from '../containers/HomeScreen'
import SettingsScreen from '../containers/SettingsScreen'
import I18n from '../i18n';

// screens identified by the router
import {Animated, Easing} from "react-native"

const PrimaryNav = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: I18n.t('Home'),
      tabBarIcon: <Icon name="home"/>
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: I18n.t('Settings'),
      tabBarIcon: <Icon name="cog"/>
    }
  }
}, {
  tabBarPosition: 'bottom',
  initialRouteName: "Home",
  // headerMode: "none",
  // transitionConfig: () => ({
  //   transitionSpec: {
  //     duration: 0,
  //     timing: Animated.timing,
  //     easing: Easing.step0
  //   }
  // })
});

export default PrimaryNav;
