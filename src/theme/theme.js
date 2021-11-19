import { extendTheme } from "@chakra-ui/react";

// グローバルなテーマを定義
const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "orange.50",
        color: "gray.800",
      },
      p: {
        fontSize: { base: "md", md: "lg" },
        lineHeight: "tall",
      },
    },
  },
});

export default theme;
