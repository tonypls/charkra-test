import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";

import "./App.css";

// 2. Extend the theme to include custom colors, fonts, etc

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box p={2}>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
      >
        <Box>
          <Text color="brand.700">Germany</Text>
        </Box>
        <Box>October 31, 2022 at 5:00pm</Box>
      </Flex>
      <Box
        onClick={toggleColorMode}
        mb={4}
        w="100%"
        h={16}
        bg="brand.100"
      ></Box>
      <Box mb={4} w="100%" h={16} bg="pink"></Box>
      <Box mb={4} w="100%" h={16} bg="pink"></Box>
      <Box mb={4} w="100%" h={1000} bg="pink"></Box>
    </Box>
  );
}

export default App;
