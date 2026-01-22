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
  const { selectedPart, setStatusPart } = usePartStore();

  const details = useMemo(() => {
    return Object.values(PartDetailsEnum).map((value) => {
      switch (value) {
        case PartDetailsEnum.STATUS:
          return (
            <Select
              key={value}
              data={Object.values(PartStatusEnum)}
              value={selectedPart?.status}
              onChange={(value) => setStatusPart(value as PartStatusEnum)}
              bg={"var(--mantine-color-dark-6)"}
              c={"white"}
            />
          );
        default:
          return (
            <Flex gap={10}>
              <Text key={value} c={"white"}>{`${value}:`}</Text>
              <Text key={value} c={"gray"}>{` ${
                selectedPart?.[enumToKeyMap[value]]
              }`}</Text>
            </Flex>
          );
      }
    });
  }, [selectedPart]);

  const renderEmptyState = () => {
    return (
      <Flex
        direction={"column"}
        align={"center"}
        justify={"center"}
        h={"100%"}
        style={{ opacity: 0.6 }}
        bg={"var(--mantine-color-dark-9)"}
      >
        <Text c={"gray"} size="lg">
          No part selected
        </Text>
        <Text c={"gray"} size="sm" mt="xs">
          Select a part from the list to view details
        </Text>
      </Flex>
    );
  };

  return (
    <>
      {selectedPart ? (
        <Flex
          direction={"column"}
          h={"100%"}
          bg={"var(--mantine-color-dark-9)"}
          color="white"
          p={20}
          gap={10}
        >
          {details}
        </Flex>
      ) : (
        renderEmptyState()
      )}
    </>
  );
};

export default PartDetails;
