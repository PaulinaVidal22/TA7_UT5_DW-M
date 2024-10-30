import { useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Separator } from './components/separator';
import { InputArea } from './components/inputArea';
// import { List } from './components/list';
import { Item } from './components/item';
import axios from 'axios';

export default function App() {
   const [item, setItem] = useState(null);
   const [itemName, setItemName] = useState(''); 
   const [error, setError] = useState("");

  const handleSearch = (itemName) => {
    setItemName(itemName);
  };

  const fetchItem = async () => {
    if (!itemName) return; 
    setError(""); 

      try {
        const response = await axios.get(`https://www.omdbapi.com/?t=${itemName}&apikey=d4e73ec3`);
        const data = await response.data;

        if (data.Response === "True") {
          setItem(data);
          setItemName('');
        } else {
          Alert.alert("Movie not found", data.Error);
          setError("Movie not found");
          setItem(null);
        }
      } catch (error) {
        setError(error);
        console.error(error);
        Alert.alert("Error", "There was an error fetching the movie.");
      }
      
  };

  return (
      <View style={styles.allComponentsContainer}>
        <View style={styles.InputAreaContainer}>
          <Text style={styles.title}>Movie Search</Text>
          <Separator /> 
        </View>
        <InputArea onChangeText={handleSearch} text={itemName} handlePress={fetchItem} />
        <Item item={item} error={error}/>
      </View> 
  );
}

const styles = StyleSheet.create({
  allComponentsContainer: {
    flex:1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 16,  
  },
  InputAreaContainer: {  
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    letterSpacing: 2,
    fontStyle: 'italic',
    fontSize: 18,
    fontFamily: "Times New Roman",
  },
});

