import { Launch } from "@/types/launch";
import { StyleSheet, View } from "react-native";
import { Card, Text } from "react-native-paper";

export const LaunchCard = ({
  id,
  details,
  missionName,
  rocketName,
  rocketType,
  launchDate,
}: Launch) => {
  return (
    <Card>
      <Card.Title title={missionName} />
      <Card.Content>
        <LaunchCardLabelValue label="Launched on" value={launchDate} />
        <LaunchCardLabelValue label="Rocket" value={rocketName} />
      </Card.Content>
    </Card>
  );
};

const LaunchCardLabelValue = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return (
    <View style={styles.labelValueContainer}>
      <Text variant="bodyMedium" style={styles.label}>
        {label}:
      </Text>
      <Text variant="bodyMedium">{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  labelValueContainer: {
    flexDirection: "row",
    columnGap: 4,
  },
  label: {
    fontWeight: "bold",
  },
});
