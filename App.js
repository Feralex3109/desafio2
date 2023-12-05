import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <Button title="+" />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Mortadela</Text>
          <Text> $ 11.500 </Text>
          <Button title="-" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Queso Tajado</Text>
          <Text> $ 15.000 </Text>
          <Button title="-" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Pan Tajado</Text>
          <Text> $ 10.000 </Text>
          <Button title="-" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Mantequilla</Text>
          <Text> $ 13.000 </Text>
          <Button title="-" />
        </View>
        <View style={styles.cardProduct}>
          <Text style={styles.cardTitle}>Lechuga</Text>
          <Text> $ 10.500 </Text>
          <Button title="-" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "start",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    backgroundColor: "#D6DBDF",
  },
  input: {
    borderWidth: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 200,
    backgroundColor: "#F5B7B1",
  },
  listContainer: {
    width: "100%",
    backgroundColor: "#ABEBC6",
  },
  cardProduct: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    justifyContent: "space-around",
    alignItems: "center",
    borderWidth: 5,
    backgroundColor: "#D2B4DE",
  },
  cardTitle: {
    color: "#CB4335",
  },
});
