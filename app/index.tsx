import { useLaunches } from "@/api/hooks/useLaunches";
import { ActivityIndicator, FullScreenCenter } from "@/components";
import { LaunchCard } from "@/components/launch";
import { useRouter } from "expo-router";
import { FlatList, Pressable, StyleSheet, View } from "react-native";

export default function Launches() {
  const { data: launches, loading, error } = useLaunches();

  const router = useRouter();

  if (loading || launches === undefined) {
    return (
      <FullScreenCenter>
        <ActivityIndicator />
      </FullScreenCenter>
    );
  }

  // TODO error
  // if (error) {}

  const handleViewDetails = (id: string) => {
    router.navigate({ pathname: "[id]", params: { id } });
  };

  return (
    <View>
      <FlatList
        style={styles.list}
        contentContainerStyle={{
          gap: 16,
        }}
        data={launches}
        renderItem={({ item }) => (
          <Pressable onPress={() => handleViewDetails(item.id)}>
            <LaunchCard {...item} />
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    padding: 24,
  },
});
