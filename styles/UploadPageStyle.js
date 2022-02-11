import {StyleSheet, Dimensions} from 'react-native';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.6,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  headerButton: {
    borderRadius: 80,
    color: '#FF480E',
  },
  description: {
    flex: 6,
  },
  image: {
    width: SCREEN_WIDTH * 0.9,
    flex: 0.5,
    borderTopColor: '#777777',
    borderTopWidth: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  textIput: {
    width: SCREEN_WIDTH * 0.9,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777777',
    borderBottomColor: '#777777',
    borderBottomWidth: 1,
    padding: 10,
  },
  textIputDescription: {
    width: SCREEN_WIDTH * 0.9,
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#777777',
  },
});