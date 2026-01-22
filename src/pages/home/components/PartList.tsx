import { useEffect } from "react";
import partService from "../../../services/part";
import { usePartStore } from "../../../stores/part";
import { Flex, Text } from "@mantine/core";
import type { IPart } from "../../../models/part";
import List from "../../../components/List/List";
import { PartStatusEnum } from "../../../models/enums/partEnum";

const statusColorMap: Record<PartStatusEnum, string> = {
  [PartStatusEnum.APPROVED]: "green",
  [PartStatusEnum.REJECTED]: "red",
  [PartStatusEnum.PENDING]: "gray",
  [PartStatusEnum.IN_REVIEW]: "blue",
};

const PartsList = () => {
  const { parts, selectedPart, setAllParts, setSelectedPart } = usePartStore();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await partService.getAll();
    setAllParts(res.data);
  };

  const handleSelect = (item: IPart) => {
    setSelectedPart(item.id !== selectedPart?.id ? item : null);
  };

  const getStatusColor = (status: PartStatusEnum): string => {
    return statusColorMap[status] || "gray";
  };

  return (
    <List
      data={parts}
      renderItem={(item) => (
        <Flex
          direction={"column"}
          onClick={(e) => handleSelect(item)}
          bg={selectedPart?.id === item.id ? "var(--mantine-color-dark-6)" : ""}
          p={10}
        >
          <Flex justify={"space-between"} direction={"row"}>
            <Text c={"white"}>{item.name}</Text>
            <Text c={"gray"}>{item.supplier}</Text>
          </Flex>
          <Text fz={12} c={getStatusColor(item.status)}>
            {item.status}
          </Text>
        </Flex>
      )}
    />
  );
};

export default PartsList;
