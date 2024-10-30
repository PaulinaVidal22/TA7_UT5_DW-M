import { StyleSheet, View, TextInput} from "react-native";

export const InputBar = ({onChangeText, text}) => {
    
  
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="write here.."
                value={text}
                />
      </View>

    );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
    input : {
      borderColor:'mediumorchid',
      height: 40,
      margin: 8, 
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
      flex: 1,  
      fontFamily: "Times New Roman",
    }
  });