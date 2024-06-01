import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, Text } from "react-native";

export type Ref = BottomSheetModal;
const BottomSheet = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

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
      ref={ref}
      overDragResistanceFactor={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackDrop}
    >
      <Text>BottomSheet</Text>
    </BottomSheetModal>
  );
});

export default BottomSheet;

const styles = StyleSheet.create({});
