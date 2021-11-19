import { Heading } from "@chakra-ui/layout";
import { memo } from "react";

export const TodoTitle = memo(({ title, as, fontSize, mt }) => {
  return (
    <Heading mt={mt} as={as} fontSize={fontSize} w="full">
      {title}
    </Heading>
  );
});
