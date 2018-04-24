#!/bin/sh
~/Library/Android/sdk/emulator/emulator -avd $(~/Library/Android/sdk/emulator/emulator -list-avds|head -n1)&
react-native run-android
