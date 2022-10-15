import React from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";

import { Text } from "../../../../components/Text";

export type DetailsProps = {
  name: string;
  farmLogo: ImageSourcePropType;
  farmName: string;
  description: string;
  price: string;
  buttonText: string;
};

export function Details({
  name,
  farmLogo,
  farmName,
  description,
  price,
  buttonText,
}: DetailsProps) {
  return (
    <>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.farm}>
        <Image source={farmLogo} style={styles.farmImage} />
        <Text style={styles.farmName}>{farmName}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  farmImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
