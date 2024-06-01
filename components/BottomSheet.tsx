import Colors from "@/constants/Colors";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
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
            <Text>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.toggleInactive}
            onPress={() => dismiss()}
          >
            <Text>Pick up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
          <Text>Confirm</Text>
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
    gap: 20,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
  },
  toggleInactive: {},
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
});
