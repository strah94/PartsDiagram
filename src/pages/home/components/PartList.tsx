import { useEffect } from "react";
import partService from "../../../services/part";
import { usePartStore } from "../../../stores/part";
import { Flex, Text } from "@mantine/core";
import type { IPart } from "../../../models/part";
import List from "../../../components/List/List";

const PartsList = () => {
  const { parts, setAllParts, setSelectedPart } = usePartStore();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await partService.getAll();
    setAllParts(res.data);
  };

  const handleSelect = (item: IPart) => {
    setSelectedPart(item);
  };

  return (
    <List
      data={parts}
      renderItem={(item) => (
        <Flex direction={"column"} onClick={(e) => handleSelect(item)}>
          <Flex justify={"space-between"} direction={"row"}>
            <Text c={"white"}>{item.name}</Text>
            <Text c={"gray"}>{item.supplier}</Text>
          </Flex>
          <Text fz={12} c={"green"}>
            {item.status}
          </Text>
        </Flex>
      )}
    />
  );
};

export default PartsList;
