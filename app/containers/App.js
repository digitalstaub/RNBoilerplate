import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from '../store'; //Import the store
import AppNavigator from '../navigation/AppNavigator' //Import the component file
// import HomeScreen from './HomeScreen'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}
