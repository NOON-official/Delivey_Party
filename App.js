import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage from './components/Login/LoginPage';
import MainPage from './components/MainPage';
import UploadPage from './components/UploadPage';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId:
      '868757817271-rp1a7gpptj9jotqnd2duhhmsov3kl831.apps.googleusercontent.com',
  });
};

export default function App() {
  // useEffect(() => googleSigninConfigure());
  return (
    <NavigationContainer>
      <LoginPage />
      {/* <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              return <Ionicons name={'home'} size={30} color={'black'} />;
            } else if (route.name === 'Upload') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return (
                <Ionicons name={'cloud-upload'} size={30} color={'black'} />
              );
            } else if (route.name === 'Recent') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <Ionicons name={'undo'} size={30} color={'black'} />;
            } else if (route.name === 'MyPage') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
              return <Ionicons name={'person'} size={30} color={'black'} />;
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Upload" component={UploadPage} />
        <Tab.Screen name="Recent" component={HomeScreen} />
        <Tab.Screen name="MyPage" component={SettingsScreen} />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
