import React from "react";
import { View, Image, StyleSheet, ImageSourcePropType } from "react-native";

import { Text } from "../../../../components/Text";

export type ItemProps = {
  item: {
    name: string;
    image: ImageSourcePropType;
  };
};

export function Item({ item: { name, image } }: ItemProps) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: "#464646",
  },
});
