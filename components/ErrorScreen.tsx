import React from "react";
import { Text, useTheme } from "react-native-paper";
import { FullScreenCenter } from "./FullScreenCenter";

export const ErrorScreen = ({ screenName }: { screenName: string }) => {
  const theme = useTheme();

  return (
    <FullScreenCenter style={{ backgroundColor: theme.colors.inversePrimary }}>
      <Text variant="titleMedium">Oops!</Text>
      <Text variant="bodyMedium">
        Error loading {screenName}. Please try again.
      </Text>
    </FullScreenCenter>
  );
};
