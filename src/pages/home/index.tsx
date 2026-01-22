import { Flex } from "@mantine/core";
import PartsList from "./components/PartList";

const Home = () => {
  return (
    <Flex w={"100%"} h={"100%"}>
      <Flex flex={1}>
        <PartsList />
      </Flex>
      <Flex direction={"column"} justify={"space-between"} flex={3}></Flex>
    </Flex>
  );
};

export default Home;
