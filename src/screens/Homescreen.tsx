import { View, Text, FlatList, Button, StyleSheet, Image} from "react-native";

export default function HomeScreen({ navigation, menu = [] }) {

  return (
    <View style={styles.container}>
    <Image 
  source={require("../assets/chef icon.jpg")} 
  style={styles.logo}
/>

      <Text style={styles.title}> Chef's Menu</Text>
      <Text style={styles.subtitle}>Total Dishes: {menu.length}</Text>

      {menu.length === 0 ? (
        <Text style={styles.empty}>No dishes added yet.</Text>
      ) : (
        <FlatList
          data={menu}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.course}>Course: {item.course}</Text>
              <Text style={styles.price}>Price: R{item.price}</Text>
              <Text style={styles.desc}>{item.description}</Text>
            </View>
          )}
        />
      )}

      <Button title="Add New Dish" onPress={() => navigation.navigate("AddMenu")} color="#007bff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 10 },
  empty: { textAlign: "center", color: "gray", marginTop: 20 },
  card: { backgroundColor: "#f8f8f8", padding: 15, marginVertical: 8, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  course: { fontSize: 14, color: "#555" },
  price: { fontSize: 14, color: "#555" },
  desc: { fontSize: 13, color: "#333", marginTop: 4 },
  logo: {height: 175, width: 175,},
});
