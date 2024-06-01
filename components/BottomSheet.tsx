import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { Link } from "expo-router";
import React, { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);
  const { dismiss } = useBottomSheetModal();
  const renderBackDrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      backgroundStyle={{ backgroundColor: Colors.lightGrey }}
      handleIndicatorStyle={{ display: "none" }}
      ref={ref}
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackDrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity
            style={styles.toggleActive}
            onPress={() => dismiss()}
          >
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleInactive}
            onPress={() => dismiss()}
          >
            <Text style={styles.inActiveText}>Pick up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.subHeader}> Your location</Text>

        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="location-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Current location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
          </TouchableOpacity>
        </Link>

        <Text style={styles.subHeader}> Arrival time</Text>
        <Link href={"/"} asChild>
          <TouchableOpacity style={styles.item}>
            <Ionicons name="location-outline" size={20} color={Colors.medium} />
            <Text style={{ flex: 1 }}>Current location</Text>
            <Ionicons name="chevron-forward" size={20} color={Colors.medium} />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: "#fff",
    fontWeight: "700",
  },
  toggleInactive: {
    // backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inActiveText: {
    color: Colors.primary,
    fontWeight: "700",
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "600",
    margin: 16,
  },
  item: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});
