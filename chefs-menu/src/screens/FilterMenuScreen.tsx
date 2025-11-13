import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function FilterMenuScreen({ navigation, menu }) {
  const [selectedCourse, setSelectedCourse] = useState("All");

  const courses = ["All", "Starters", "Main", "Dessert"];

  // ✅ Filter the menu based on selected course
  const filteredMenu =
    selectedCourse === "All"
      ? menu
      : menu.filter((item) => item.course.toLowerCase() === selectedCourse.toLowerCase());

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guest Menu</Text>

      <Text style={styles.subtitle}>Filter by Course:</Text>
      <View style={styles.filterRow}>
        {courses.map((course) => (
          <TouchableOpacity
            key={course}
            style={[
              styles.filterButton,
              selectedCourse === course && styles.activeButton,
            ]}
            onPress={() => setSelectedCourse(course)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCourse === course && styles.activeText,
              ]}
            >
              {course}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredMenu}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Text style={styles.empty}>No dishes found.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>R{item.price}</Text>
          </View>
        )}
      />

      <Button
        title="Back to Home"
        onPress={() => navigation.navigate("Home")}
        color="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 10 },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#007bff",
    borderRadius: 8,
  },
  activeButton: { backgroundColor: "#007bff" },
  filterText: { color: "#007bff", fontWeight: "bold" },
  activeText: { color: "white" },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  name: { fontWeight: "bold", fontSize: 16 },
  empty: { textAlign: "center", color: "gray", marginTop: 20 },
});