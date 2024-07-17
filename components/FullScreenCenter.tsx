import { ReactNode } from "react";
import { StyleSheet, View, ViewProps } from "react-native";

type FullScreenCenterProps = {
  children: ReactNode;
} & ViewProps;

export const FullScreenCenter = ({
  children,
  ...props
}: FullScreenCenterProps) => {
  return (
    <View {...props} style={[styles.container, props.style || {}]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
