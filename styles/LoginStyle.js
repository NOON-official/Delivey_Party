import {StyleSheet, Dimensions} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const {width: SCREEN_WIDTH} = Dimensions.get('window');
const {height: SCREEN_HEIGHT} = Dimensions.get('window');
export const Styles = StyleSheet.create({
nicknamebox:{
    
    marginTop: 50, 
    flexDirection: 'row', 
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    justifyContent: 'space-between',
    width: SCREEN_WIDTH/1.3,
    height:SCREEN_HEIGHT/14,
    backgroundColor:'#ECECEC'
},
dropdownview:{
    flex:2,
     marginTop: 50,
    margin: 100,
    zIndex: 2000,
    flexDirection: 'row',
    justifyContent:'space-between'
},
dropdownstyle:{
    width: SCREEN_WIDTH/1.3/2,
    height: SCREEN_HEIGHT/14,
   
},
signin:{
    width: SCREEN_WIDTH/1.3,
    height:SCREEN_HEIGHT/13,
}
})