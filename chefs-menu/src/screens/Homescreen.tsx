import { View, Text, FlatList, Button, StyleSheet, Image} from "react-native";



export default function HomeScreen({ navigation, menu = [] }) {

  const calculateAveragePrice = (course: string): string => {
  const filteredItems = menu.filter((item) => item.course === course);
  if (filteredItems.length === 0) return "0.00";

  const total = filteredItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
  const average = total / filteredItems.length;
  return average.toFixed(2);
};

  return (
    <View style={styles.container}>
    <Image 
  source={require("../assets/chef icon.jpg")} 
  style={styles.logo}
/>

      <Text style={styles.title}> Chef's Menu </Text>
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

    <View style={styles.displayaverage}>
      <Text style={styles.average}> Average Price </Text>
      <Text>Starters: R{calculateAveragePrice("Starters")}</Text>
      <Text>Main: R{calculateAveragePrice("Main")}</Text>
      <Text>Dessert: R{calculateAveragePrice("Dessert")}</Text>

    </View>
      
      <Button title="Add New Dish" onPress={() => navigation.navigate("AddMenu")} color="#007bff" />

      <Button
  title="Filter Menu"
  onPress={() => navigation.navigate("FilterMenu")}
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#8bc34a" },
  title: { fontSize: 26, fontWeight: "bold", color:"#000000", marginBottom: 10, textAlign: "center" },
  subtitle: { fontSize: 16, textAlign: "center", marginBottom: 10, color:"#f33e30", },
  empty: { textAlign: "center", color: "gray", marginTop: 20, color:"#001ec4" },
  card: { backgroundColor: "#f8f8f8", padding: 15, marginVertical: 8, borderRadius: 10 },
  name: { fontSize: 18, fontWeight: "bold" },
  course: { fontSize: 14, color: "#555" },
  price: { fontSize: 14, color: "#555" },
  desc: { fontSize: 13, color: "#333", marginTop: 4 },
  logo: {height: 250, width: 300, borderRadius: 5, marginBottom: 15,},
  average: { fontSize: 18, fontWeight: 'bold', marginTop: 20 },
  displayaverage: {
  backgroundColor: '#fff8e1',
  padding: 15,
  borderRadius: 10,
  marginVertical: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 3
},
});