import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginPage from './components/Login/LoginPage';
import MainPage from './components/MainPage';
import UploadPage from './components/UploadPage';

import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const googleSigninConfigure = () => {
  GoogleSignin.configure({
    webClientId:
      '868757817271-rp1a7gpptj9jotqnd2duhhmsov3kl831.apps.googleusercontent.com',
  });
};

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
      <Button title="log out" onPress={() => auth().signOut()}></Button>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNaviagator() {
  return (
    <Tab.Navigator
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
            return <Ionicons name={'cloud-upload'} size={30} color={'black'} />;
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
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('Please');
  const checkLoggedIn = () => {
    auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedIn(true);
        user.updateProfile({
          displayName: `${displayName}`,
        });
        console.log('loggedIn');
        console.log(user);
      } else {
        setLoggedIn(false);
        console.log('loggedOut');
      }
    });
  };
  useEffect(() => {
    googleSigninConfigure();
    checkLoggedIn();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="Login" component={LoginPage} />
        ) : (
          <Stack.Screen name="Tab" component={TabNaviagator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
