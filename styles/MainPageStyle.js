import {StyleSheet, Dimensions} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  mainTop: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },
  mainTopText: {
    fontSize: 30,
    textAlign: 'left',
    paddingLeft: 30,
    paddingTop: 25,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: 'black',
  },
  mainMiddle: {
    flex: 9,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
  },
  mainMiddleView1: {
    flex: 1,
    marginBottom: 30,
    marginTop: 30,
  },
  mainMiddleIcon: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainMiddleText1: {
    flex: 1,
    textAlign: 'center',
    marginTop: 5,
  },
  mainMiddleView2: {
    flex: 3,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
  },
  mainMiddleTitle: {
    flex: 1.5,
    fontSize: 20,
    color: 'black',
  },
  mainMiddleDescription: {
    flex: 1,
    fontSize: 15,
    color: '#777777',
  },
  mainMiddleView3: {
    flexDirection: 'row',
    flex: 1,
  },
  mainMiddleName: {
    flex: 1,
    fontSize: 15,
    borderRightColor: '#777777',
    borderRightWidth: 1,
    color: '#777777',
  },
  mainMiddleTime: {
    flex: 1,
    fontSize: 15,
    marginLeft: 5,
    color: '#777777',
  },
  mainBottom: {
    flex: 1.5,
    backgroundColor: 'white',
    width: SCREEN_WIDTH,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: '#C4C4C4',
  },
  mainBottomButtons: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  mainBottomText: {
    color: '#C4C4C4',
  },
  list: {
    height: SCREEN_HEIGHT / 6.5,
    width: SCREEN_WIDTH - 20,
    alignItems: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  listImage: {
    flex: 1,
    color: 'white',
  },
  left: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 3,
    alignItems: 'center',
  },

  listImageText: {
    flex: 1,
  },
  listTitle: {
    fontSize: 20,
    flex: 1,
    textAlign: 'left',
    color: 'black',
  },
  listDescription: {
    fontSize: 15,
    flex: 1,
    textAlign: 'left',
    color: 'black',
  },
  listName: {
    fontSize: 15,
    flex: 1,
    textAlign: 'left',
    color: 'black',
  },
  listTime: {
    fontSize: 15,
    flex: 1,
    textAlign: 'left',
    color: 'black',
  },
});