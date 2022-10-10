import React from "react";
import { Button, Box, Container, Flex } from "@chakra-ui/react";
import Filters from "./components/Filters";
import Voice from "./components/Voice";

function Homepage() {
  return (
    <Flex w="100vw" h="100vh">
      {/* Left Hand Section */}
      <Filters></Filters>
      {/* Right Hand Section */}
      <Voice></Voice>
    </Flex>
  );
}

export default Homepage;
