import React from "react";
import { Box, Text, Divider } from "@chakra-ui/react";
import FilterHeader from "./FilterHeader";
import Category from "./Category";

const Filters = () => {
  return (
    <Box
      w="25%"
      p={4}
      h="100%"
      color="black"
      fontFamily={"Poppins"}
      overflowY={"scroll"}
      bgColor={"gray.100"}
      css={{
        "&::-webkit-scrollbar": {
          width: "4px",
        },
        "&::-webkit-scrollbar-track": {
          width: "0px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "grey",
          borderRadius: "24px",
        },
      }}
    >
      {/* Top Part of the Filter section */}
      <FilterHeader />
      <Divider orientation="horizontal" />
      {/* All filter Category Component */}
      <Category title="Gender" />
      <Divider orientation="horizontal" />
      <Category title="Type" />
      <Divider orientation="horizontal" />
      <Category title="Language" />
      <Divider orientation="horizontal" />
      <Category title="Country" />
    </Box>
  );
};

export default Filters;
