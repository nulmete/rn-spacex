import { ReactNode } from "react";
import { View, StyleSheet } from "react-native";

export const FullScreenCenter = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
