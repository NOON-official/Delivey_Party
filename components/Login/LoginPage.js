import randomNameGenerator from 'korean-random-names-generator';
import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, Button, StatusBar} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {WithLocalSvg} from 'react-native-svg';
import Logo from '../../assets/smile(red).svg';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth, {
  firebase,
  getAuth,
  updateProfile,
} from '@react-native-firebase/auth';

const onGoogleButtonPress = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
};

export default function LoginPage({navigation}) {
  const user = firebase.auth().currentUser;
  const [dongOpen, setDongOpen] = useState(false);
  const [floorOpen, setFloorOpen] = useState(false);
  const [dong, setDong] = useState(null);
  const [floor, setFloor] = useState(null);
  const [nickName, setNickName] = useState(randomNameGenerator());
  const [itemsDong, setItemsDong] = useState([
    {label: 'A동', value: 'A'},
    {label: 'B동', value: 'B'},
    {label: 'C동', value: 'C'},
    {label: 'D동', value: 'D'},
    {label: 'E동', value: 'E'},
  ]);
  const [itemsFloor, setItemsFloor] = useState([
    {label: '1층', value: '1'},
    {label: '2층', value: '2'},
    {label: '3층', value: '3'},
    {label: '4층', value: '4'},
    {label: '5층', value: '5'},
    {label: '6층', value: '6'},
    {label: '7층', value: '7'},
    {label: '8층', value: '8'},
    {label: '9층', value: '9'},
    {label: '10층', value: '10'},
    {label: '11층', value: '11'},
  ]);
  const onDongOpen = useCallback(() => {
    setFloorOpen(false);
  }, []);
  const onFloorOpen = useCallback(() => {
    setDongOpen(false);
  }, []);

  const changeRandomNickName = () => {
    setNickName(randomNameGenerator());
  };

  const changeDisplayName = () => {
    if (user) {
      user.updateProfile({
        displayName: `${dong}동 ${floor}층 ${nickName}`,
      });
    } else {
      console.log('update fail');
    }
  };

  return (
    <View>
      <StatusBar style="auto" />
      <View style={{alignItems: 'center', marginTop: 20}}>
        <WithLocalSvg asset={Logo} />
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{marginTop: 80, flexDirection: 'row'}}>
          <View>
            <Text>{nickName}</Text>
          </View>
          <View style={{paddingLeft: 20}}>
            <Button
              title="이름 새로고침"
              onPress={() => changeRandomNickName()}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            margin: 100,
            zIndex: 2000,
            flexDirection: 'row',
          }}>
          <DropDownPicker
            open={dongOpen}
            onOpen={onDongOpen}
            items={itemsDong}
            value={dong}
            setOpen={setDongOpen}
            setValue={setDong}
            setItems={setItemsDong}
            placeholder="동을 선택해 주세요"
          />
          <DropDownPicker
            open={floorOpen}
            onOpen={onFloorOpen}
            items={itemsFloor}
            value={floor}
            setOpen={setFloorOpen}
            setValue={setFloor}
            setItems={setItemsFloor}
            placeholder="층을 선택해주세요."
          />
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 110}}>
        <GoogleSigninButton
          onPress={() => {
            onGoogleButtonPress();
            changeDisplayName(); //추후 수정 필요. 현재는 유저 이름을 못 바꾸는 중
          }}
        />
      </View>
    </View>
  );
}
