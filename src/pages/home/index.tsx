import { Flex, Text } from "@mantine/core";
import PartsList from "./components/PartList";
import PartDetails from "./components/PartDetails";
import PartDiagram from "./components/PartDiagram";
import { useMedia } from "../../hooks/useMedia";

const Home = () => {
  const { isMobile } = useMedia();

  return (
    <Flex w={"100%"} h={"100%"} direction={isMobile ? "column" : "row"}>
      <Flex flex={1}>
        <PartsList />
      </Flex>
      <Flex direction={"column"} justify={"space-between"} flex={3}>
        <PartDiagram />
        <PartDetails />
      </Flex>
    </Flex>
  );
};

export default Home;
