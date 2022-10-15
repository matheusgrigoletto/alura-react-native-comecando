import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { Text } from "../../components/Text";
import { Header, HeaderProps } from "./components/Header";
import { Details, DetailsProps } from "./components/Details";
import { Item } from "./components/Item";

type BasketProps = {
  header: HeaderProps;
  details: DetailsProps;
  items: {
    title: string;
    list: any[];
  };
};

export function Basket({ header, details, items }: BasketProps) {
  return (
    <>
      <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Header {...header} />
              <View style={styles.basket}>
                <Details {...details} />
                <Text style={styles.title}>{items.title}</Text>
              </View>
            </>
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
