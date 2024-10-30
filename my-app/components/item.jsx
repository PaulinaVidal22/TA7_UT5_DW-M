import { StyleSheet, View, Text, Image } from "react-native";

export const Item = ({ item, error }) => {
  return ( 
    <View>
        {error && (
        <View style={styles.warningContainer}> 
          <Icon name="warning" style={styles.warning}></Icon>
          <Text style={styles.warningText}>{error}</Text>
        </View>
      )}
    { item && (
        <View style={styles.itemContainer}>
        <Image source={{ uri: item.Poster }} style={styles.poster} />
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.Title}</Text>
            <Text style={styles.synopsis}>{item.Plot}</Text>
        </View>
    </View>
    )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
    backgroundColor: 'lavender',
  },
  poster: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontFamily: "Times New Roman",
    fontSize: 20,
    marginBottom: 5,
  },
  synopsis: {
    fontSize: 14,
    fontFamily: "Times New Roman",
    color: '#666',
  },
  warningContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: "#800F2F",
    padding: 15,
    borderRadius: 15,
    marginTop: "50%"
  }, 
  warning: {
    color: "white",
    fontSize: 20
  }, 
  warningText: {
    color: "white",
    fontFamily: "Times New Roman",
    fontSize: 20,
  }
});
