import React, { PropsWithChildren } from "react";
import { Text as RNText, StyleSheet } from "react-native";

type TextProps = {
  style?: {
    [key: string]: Record<string, string | number> | string | number;
  };
};

export function Text({ children, style }: PropsWithChildren<TextProps>) {
  let componentStyle = styles.default;

  if (style?.fontWeight === "bold") {
    componentStyle = styles.bold;
  }

  return <RNText style={[style, componentStyle]}>{children}</RNText>;
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "MontserratRegular",
    fontWeight: "normal",
  },
  bold: {
    fontFamily: "MontserratBold",
    fontWeight: "normal",
  },
});
