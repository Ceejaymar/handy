import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type LocationForm = {
  onSubmit: (name: string) => void;
};

export default function LocationForm({ onSubmit }: LocationForm) {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name);
      setName("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    padding: 8,
    flex: 1,
  },
  button: {
    backgroundColor: "#000",
    padding: 8,
    // margin: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: 700,
  },
});
