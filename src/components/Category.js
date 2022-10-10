import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { GrPowerReset } from "react-icons/gr";

import RadioComp from "./RadioComp";
import GridComp from "./GridComp";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Contexts/Context";

const Category = ({ title }) => {
  const [value, setValue] = useState("");
  const {
    setSelLang,
    setSelCountry,
    selLang,
    selCountry,
    setSelGender,
    setSelType,
  } = useContext(Context);

  const handleClick = () => {
    // When you click the reset button of any category
    if (title === "Gender") {
      setValue("");
      setSelGender("");
    } else if (title === "Type") {
      setValue("");
      setSelType("");
    } else if (title === "Language") {
      setSelLang([]);
    } else if (title === "Country") {
      setSelCountry([]);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent={"space-between"} mt={2}>
        <Box color="black.500" letterSpacing="wide" ml="3">
          {title}
        </Box>

        <Box
          color="white"
          letterSpacing="wide"
          fontSize="xs"
          ml="2"
          display="flex"
          alignItems="center"
          as={"button"}
          onClick={handleClick}
          borderColor="gray.200"
          borderWidth={"1px"}
          borderRadius={"10%"}
          bgColor="teal"
          p={1}
          rounded="md"
          _hover={{
            boxShadow: "dark-lg",
          }}
        >
          <GrPowerReset mr={3} />
          <Text ml={2}>Reset</Text>
        </Box>
      </Box>

      {title === "Gender" || title === "Type" ? (
        // For Gender and title, multiples ption selections should not be allowed
        <RadioComp title={title} value={value} setValue={setValue} />
      ) : (
        // For Languages and Country, we can select multiple options
        <GridComp title={title} />
      )}
    </Box>
  );
};

export default Category;
