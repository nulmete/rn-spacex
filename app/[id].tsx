import { useLaunchDetails } from "@/api/hooks/useLaunchDetails";
import {
  ActivityIndicator,
  FullScreenCenter,
  LaunchDetailSection,
} from "@/components";
import { RocketDecoration } from "@/components/RocketDecoration";
import * as Linking from "expo-linking";
import { useLocalSearchParams } from "expo-router";
import { useCallback } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { Text } from "react-native-paper";

export default function LaunchDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { height, width } = useWindowDimensions();

  const { data: launch, loading, error } = useLaunchDetails({ id });

  const openArticleLink = useCallback(() => {
    if (!launch?.articleLink) return;
    Linking.openURL(launch.articleLink);
  }, [launch]);

  const openVideoLink = useCallback(() => {
    if (!launch?.videoLink) return;
    Linking.openURL(launch.videoLink);
  }, [launch]);

  if (loading || launch === undefined) {
    return (
      <FullScreenCenter>
        <ActivityIndicator />
      </FullScreenCenter>
    );
  }

  // TODO error
  // if (error) {}

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        position: "relative",
        backgroundColor: "black",
      }}
    >
      <RocketDecoration style={styles.svg} height={height} width={width} />

      <View style={styles.container}>
        <Text variant="displaySmall" style={styles.title}>
          {launch.missionName}
        </Text>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Details</LaunchDetailSection.Title>
          <LaunchDetailSection.Text>
            {launch.details || "No details available"}
          </LaunchDetailSection.Text>
        </LaunchDetailSection>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Launched on</LaunchDetailSection.Title>
          <LaunchDetailSection.Text>
            {launch.launchDate}
          </LaunchDetailSection.Text>
        </LaunchDetailSection>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Rocket name</LaunchDetailSection.Title>
          <LaunchDetailSection.Text>
            {launch.rocketName}
          </LaunchDetailSection.Text>
        </LaunchDetailSection>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Launch site</LaunchDetailSection.Title>
          <LaunchDetailSection.Text>
            {launch.launchSiteName || "Unknown"}
          </LaunchDetailSection.Text>
        </LaunchDetailSection>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Article</LaunchDetailSection.Title>
          <LaunchDetailSection.Link onPress={openArticleLink}>
            {launch.articleLink}
          </LaunchDetailSection.Link>
        </LaunchDetailSection>

        <LaunchDetailSection>
          <LaunchDetailSection.Title>Video</LaunchDetailSection.Title>
          <LaunchDetailSection.Link onPress={openVideoLink}>
            {launch.videoLink}
          </LaunchDetailSection.Link>
        </LaunchDetailSection>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    rowGap: 12,
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0.45,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
