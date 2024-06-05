import { categories } from "@/assets/data/home";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type checkBox = {
  checked?: boolean;
};
interface Category {
  name: string;
  count: number;
  checked?: boolean;
  //    checked?: checkBox;
  // image: ImageProps;
  //   text: string;
  //   img: ImageProps;
}

const ItemBox = () => (
  <>
    <View style={styles.itemContainer}>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="arrow-down-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Sort</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="fast-food-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Hygiene rating</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="pricetag-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Offers </Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.item}>
        <Ionicons name="nutrition-outline" size={20} color={Colors.medium} />
        <Text style={{ flex: 1 }}>Dietary</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
      </TouchableOpacity>
    </View>
    <Text style={styles.header}>Categories</Text>
  </>
);

const Filter = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<Category[]>(categories);

  const handleClearAll = () => {
    const updateItems = items.map((item) => {
      item.checked = false;

      return item;
    });
    setItems(updateItems);
  };

  const renderItem: ListRenderItem<Category> = ({ item, index }) => (
    <View style={styles.row}>
      <View>
        <Text style={styles.itemText}>
          {item.name} ({item.count})
        </Text>
      </View>
      <View>
        <BouncyCheckbox
          fillColor={Colors.primary}
          unFillColor={"#fff"}
          iconStyle={{
            borderColor: Colors.primary,
            borderRadius: 4,
            borderWidth: 2,
          }}
          innerIconStyle={{ borderColor: Colors.primary, borderRadius: 4 }}
          isChecked={items[index].checked}
          onPress={() => {
            const isChecked = items[index].checked;

            const updateItems = items.map((item) => {
              if (item.name === items[index].name) {
                item.checked = !isChecked;
              }
              return item;
            });
            setItems(updateItems);
          }}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <Button title="clear all" onPress={handleClearAll} />
      <FlatList
        data={items}
        renderItem={renderItem}
        ListHeaderComponent={<ItemBox />}
      />
      <View style={{ height: 80 }} />
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.fullButton}
        >
          <Text style={styles.footerText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    padding: 10,
    backgroundColor: "#fff",
    elevation: 10,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    backgroundColor: Colors.primary,
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  footerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
  itemText: {
    // flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
});
