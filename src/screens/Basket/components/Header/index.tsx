import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

import { Text } from "../../../../components/Text";

export type HeaderProps = {
  title: string;
};

const width = Dimensions.get("screen").width;

export function Header({ title }: HeaderProps) {
  return (
    <>
      <Image
        source={require("../../../../assets/header.png")}
        style={styles.header}
      />
      <Text style={styles.title}>{title}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
});
