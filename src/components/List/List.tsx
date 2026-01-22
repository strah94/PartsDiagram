import { Flex } from "@mantine/core";
import type { IPart } from "../../models/part";
import "./List.css";

interface IProps<TBase extends IPart> {
  data: TBase[];
  renderItem: (item: TBase) => React.ReactNode;
}

const List = <TBase extends IPart>({ data, renderItem }: IProps<TBase>) => {
  return (
    <Flex
      direction={"column"}
      w={"100%"}
      bg={"black"}
      p={10}
      gap={10}
      className="list-container"
    >
      {data.map((e) => renderItem(e))}
    </Flex>
  );
};

export default List;
