import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
} from 'react-native';
import {styles} from '../styles/UploadPageStyle';
import firestore from '@react-native-firebase/firestore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';
const UploadCollection = firestore().collection('Upload');

export default function UploadPage({navigation}) {
  const [valueTitle, onChangeTextTitle] = useState();
  const onChangeTitle = title => onChangeTextTitle(title);
  const [valueStore, onChangeTextStore] = useState();
  const onChangeStore = store => onChangeTextStore(store);
  const [valueMenu, onChangeTextMenu] = useState();
  const onChangeMenu = menu => onChangeTextMenu(menu);
  const [valueDescription, onChangeTextDescription] = useState();
  const onChangeDescription = description =>
    onChangeTextDescription(description);
  const [ValueImage, setImage] = useState();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '한식', value: '한식'},
    {label: '중식', value: '중식'},
    {label: '일식', value: '일식'},
    {label: '분식', value: '분식'},
    {label: '디저트,카페', value: '디저트,카페'},
    {label: '기타', value: '기타'},
  ]);

  function uploadData(title, store, menu, description) {
    const data = {
      Title: title,
      Store: store,
      Menu: menu,
      Descript: description,
      Created: Date(),
    };

    UploadCollection.doc().set(data);

    navigation.navigate('Home');
    onChangeTextTitle('');
    onChangeTextStore('');
    onChangeTextMenu('');
    onChangeTextDescription('');
  } // firestore 데이터 올리기

  function addImage() {
    launchImageLibrary({}, Response => {
      setImage(Response.uri);
    });
  } // imagePicker

  function alertText() {
    if (valueTitle && valueStore && value && valueDescription) {
      Keyboard.dismiss();
      if (ValueImage == null) {
        Alert.alert('사진없이 업로드 하시겠습니까?', '', [
          {
            text: '예',
            onPress: () =>
              uploadData(valueTitle, valueStore, value, valueDescription),
          },
          {
            text: '아니오',
            onPress: () => console.log('no'),
            style: 'cancel',
          },
        ]);
      } else {
        yes();
      }
    } else {
      alert('제목, 가게이름, 메뉴, 설명은 필수 입력사항입니다.');
    }
  } // 완료 press시 alert
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{flex: 2, marginLeft: 10}}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name={'backspace'} size={38} color={'#FF480E'} />
        </TouchableOpacity>
        <View style={{flex: 8}}>
          <Text style={styles.headerTitle}>글 작성하기 </Text>
        </View>
        <View style={{flex: 2, paddingRight: 15}}>
          <Button
            style={styles.headerButton}
            onPress={() => alertText()}
            title="완료"
            color={'#FF480E'}></Button>
        </View>
      </View>
      <View style={styles.description}>
        <TextInput
          style={styles.textIput}
          returnKeyType="done"
          placeholder="제목"
          onChangeText={onChangeTitle}
          value={valueTitle}
          multiline={true}
        />

        <DropDownPicker
          style={styles.textIput}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          defaultIndex={0}
          placeholder="메뉴를 선택해 주세요"
        />
        <TextInput
          style={styles.textIput}
          returnKeyType="done"
          placeholder="식당 이름"
          onChangeText={onChangeStore}
          value={valueStore}
          multiline={true}
        />
        <TextInput
          style={styles.textIputDescription}
          returnKeyType="done"
          placeholder="설명을 적어주세요"
          onChangeText={onChangeDescription}
          value={valueDescription}
          multiline={true}
        />
      </View>

      <TouchableOpacity onPress={() => addImage()} style={styles.image}>
        <Ionicons name={'camera'} size={27} color={'#FF480E'} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
