import { StyleSheet, View } from "react-native";


export const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
    separator: {
      marginVertical: 4,
      borderBottomColor: 'orchid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      width: '100%',
    }
  });