import React from "react";
import { Box } from "@chakra-ui/react";

const NoResultsFound = () => {
  return (
    <Box
      color="gray.600"
      p={3}
      bgColor="lightgray"
      width={"100%"}
      height={"100%"}
      borderRadius={"md"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      fontFamily={"Poppins"}
      fontSize={"3xl"}
    >
      Sorry, we could not find any results !
    </Box>
  );
};

export default NoResultsFound;
