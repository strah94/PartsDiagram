import { Flex, Select, Text } from "@mantine/core";

import { useMemo } from "react";
import { usePartStore } from "../../../stores/part";
import {
  PartDetailsEnum,
  PartStatusEnum,
} from "../../../models/enums/partEnum";
import type { IPart } from "../../../models/part";

const enumToKeyMap: Record<PartDetailsEnum, keyof IPart> = {
  [PartDetailsEnum.NAME]: "name",
  [PartDetailsEnum.STATUS]: "status",
  [PartDetailsEnum.SUPPLIER]: "supplier",
  [PartDetailsEnum.MATERIAL]: "material",
  [PartDetailsEnum.WEIGHT]: "weight",
  [PartDetailsEnum.CRITICAL_COMPONENT]: "critical",
  [PartDetailsEnum.LAST_UPDATED]: "lastUpdated",
};

const PartDetails = () => {
  const { selectedPart } = usePartStore();

  const details = useMemo(() => {
    return Object.values(PartDetailsEnum).map((value) => {
      switch (value) {
        case PartDetailsEnum.STATUS:
          return (
            <Select
              key={value}
              data={Object.values(PartStatusEnum)}
              value={selectedPart?.status}
            />
          );
        default:
          return (
            <Text key={value}>{`${value}: ${
              selectedPart?.[enumToKeyMap[value]]
            }`}</Text>
          );
      }
    });
  }, [selectedPart]);

  return (
    <Flex direction={"column"} h={"100%"}>
      {details}
    </Flex>
  );
};

export default PartDetails;
