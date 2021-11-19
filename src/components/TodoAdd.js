import { Button } from "@chakra-ui/button";
import { Textarea } from "@chakra-ui/textarea";

export const TodoAdd = ({
  placeholder,
  leftIcon,
  buttonText,
  inputEl,
  handleAddTodoListItem,
}) => {
  return (
    <>
      <Textarea
        placeholder={placeholder}
        bgColor="white"
        mt="8"
        borderColor="gray.400"
        ref={inputEl}
      />
      <Button
        onClick={handleAddTodoListItem}
        colorScheme="blue"
        leftIcon={leftIcon}
        mt="8"
      >
        {buttonText}
      </Button>
    </>
  );
};
