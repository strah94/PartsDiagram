import { Flex, Text } from "@mantine/core";
import PartsList from "./components/PartList";
import PartDetails from "./components/PartDetails";

const Home = () => {
  return (
    <Flex w={"100%"} h={"100%"}>
      <Flex flex={1}>
        <PartsList />
      </Flex>
      <Flex direction={"column"} justify={"space-between"} flex={3}>
        <Text>DIAGRAM</Text>
        <PartDetails />
      </Flex>
    </Flex>
  );
};

export default Home;
