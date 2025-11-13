import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function AddMenuScreen({ navigation, menu, setMenu }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starter");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const addDish = () => {
    if (name && description && price) {
      const newDish = { name, description, course, price };
setMenu([...menu, newDish]);
      navigation.navigate("Home");
    } else {
      setError("Please fill in all fields.");
      return;
    }

    const numericPrice = parseFloat(price);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("Enter a valid price.");
      return;
    }

    const newDish = { name, description, course, price: numericPrice };
    setMenu([...menu, newDish]);

    setName("");
    setDescription("");
    setCourse("Starter");
    setPrice("");
    setError("");
    navigation.goBack();
  };

  const removeDish = (index: any) => {
    const updatedMenu = menu.filter((_, i) => i !== index);
    setMenu(updatedMenu);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />

      <Picker selectedValue={course} onValueChange={(itemValue) => setCourse(itemValue)} style={styles.picker}>
        <Picker.Item label="Select Course" value="" />
        <Picker.Item label="Starters" value="Starters"/>
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>

      <TextInput
        placeholder="Price (R)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      {error !== "" && <Text style={styles.error}>{error}</Text>}

     <Text style={styles.subtitle}>Current Dishes:</Text>

      {menu.length === 0 ? (
        <Text style={styles.empty}>No dishes yet.</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.item}>
              <View>
                <Text style={styles.name}>{item.name}</Text>
                <Text>{item.course}</Text>
                <Text>R{item.price}</Text>
              </View>
              <TouchableOpacity onPress={() => removeDish(index)}>
                <Text style={styles.remove}>"Remove"</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}


      <Button title="Add Dish" onPress={addDish} color="#28a745" />
      <View style={{ marginTop: 10 }}>
        <Button title="Back to Home" onPress={() => navigation.goBack()} color="#007bff" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#000000", padding: 10, marginBottom: 10, borderRadius: 8 },
  picker: { borderWidth: 1, borderColor: "#000000", marginBottom: 10 },
  error: { color: "red", textAlign: "center", marginBottom: 10 },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#000000",
    paddingVertical: 10,
  },
  name: { fontWeight: "bold" },
  subtitle: { fontSize: 18, marginVertical: 10 },
remove: { color: "red", fontWeight: "bold" },
  empty: { textAlign: "center", color: "gray", marginTop: 10 },
});