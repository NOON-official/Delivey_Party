import React, {useEffect, useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableOpacity,
  Modal,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {styles} from '../styles/MainPageStyle';
const UploadCollection = firestore().collection('Upload');

export default function MainPage() {
  const [modalVisible, setModalVisible] = useState(false);
  const [Datas, setDatas] = useState([]);

  useEffect(() => {
    UploadCollection.onSnapshot(snapshot => {
      setDatas(snapshot.docs.map(doc => ({id: doc.id, Data: doc.data()})));
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.mainTop}>
        <Text style={styles.mainTopText}>오늘의 파티</Text>
      </View>
      <SafeAreaView style={styles.mainMiddle}>
        <ScrollView style={{flex: 1}} class="container">
          {Datas.map(item => {
            return (
              <TouchableOpacity style={styles.list}>
                <View style={styles.mainMiddleView1}>
                  <View style={styles.mainMiddleIcon}>
                    <Text>icon</Text>
                  </View>
                  <Text style={styles.mainMiddleText1}> 5/5</Text>
                </View>
                <View style={styles.mainMiddleView2}>
                  <Text style={styles.mainMiddleTitle}>{item.Data.Title}</Text>
                  <View style={styles.mainMiddleView3}>
                    <Text style={styles.mainMiddleName}>name</Text>
                    <Text style={styles.mainMiddleTime}>
                      {item.Data.Created}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>

      <StatusBar style="auto" />
    </View>
  );
}
