import { StyleSheet, View,  TouchableOpacity } from 'react-native';
import { InputBar } from './inputBar';
import Icon from 'react-native-vector-icons/FontAwesome';

export const InputArea = ({onChangeText, text, handlePress}) => {
    return (
        <View style={styles.inputArea}>
        <InputBar onChangeText={onChangeText} text={text}/>
        <TouchableOpacity style={styles.searchButton} onPress={handlePress}>
          <Icon name="search" size={24} color="white" /> 
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    inputArea: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      gap: 4,
      marginBottom: 8,
    },
    searchButton: {
      backgroundColor: 'orchid',
      width: 40,              
      height: 40,              
      borderRadius: 8,         
      justifyContent: 'center', 
      alignItems: 'center',
      marginLeft: 8,           
    },
  });