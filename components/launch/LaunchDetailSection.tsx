import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

export const LaunchDetailSection = ({ children }: { children: ReactNode }) => {
  return <View>{children}</View>;
};

const LaunchDetailSectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Text variant="titleMedium" style={styles.sectionTitle}>
      {children}
    </Text>
  );
};

LaunchDetailSection.Title = LaunchDetailSectionTitle;

const LaunchDetailSectionText = ({ children }: { children: ReactNode }) => {
  return <Text variant="bodyLarge">{children}</Text>;
};

LaunchDetailSection.Text = LaunchDetailSectionText;

const LaunchDetailSectionLink = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress: () => void;
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Text variant="bodyLarge" style={{ color: theme.colors.primary }}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

LaunchDetailSection.Link = LaunchDetailSectionLink;

const styles = StyleSheet.create({
  sectionTitle: {
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecorationLine: "underline",
  },
});
