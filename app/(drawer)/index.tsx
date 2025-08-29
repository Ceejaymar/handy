import { useSQLiteContext } from "expo-sqlite";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import LocationForm from "@/components/location-form";
import { type Location } from "@/types/interfaces";

export default function Page() {
  const db = useSQLiteContext();
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    loadLocations();
  }, []);

  const loadLocations = async () => {
    const locations = await db.getAllAsync<Location>(`SELECT * FROM locations`);
    console.log(locations);
  };

  const addLocation = async (name: string) => {
    await db.runAsync(`INSERT INTO locations (name) VALUES (?)`, name);
    loadLocations();
  };

  return (
    <View style={styles.container}>
      <LocationForm onSubmit={addLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
