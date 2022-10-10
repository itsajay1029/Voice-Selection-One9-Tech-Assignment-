import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { GrPowerReset } from "react-icons/gr";

const FilterHeader = () => {
  return (
    <Box display="flex" justifyContent={"space-between"} mb={5}>
      <Box color="gray.500" letterSpacing="wide" ml="2" fontSize={"large"}>
        Filters
      </Box>
    </Box>
  );
};

export default FilterHeader;
