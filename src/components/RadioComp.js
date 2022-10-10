import React from "react";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useState, useContext, useEffect } from "react";
import { Context } from "../Contexts/Context";

const RadioComp = ({ title, value, setValue }) => {
  const { setSelGender, setSelType } = useContext(Context);

  useEffect(() => {
    // This is fired when the radio selection is changed
    if (title === "Gender") {
      if (value == "1") setSelGender("Male");
      else if (value == "2") setSelGender("Female");
    }

    if (title === "Type") {
      if (value == "1") setSelType("Standard");
      else if (value == "2") setSelType("Neural");
    }
  }, [value]);

  return (
    <RadioGroup mb={5} ml={5} mt={2} onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">{title == "Gender" ? "Male" : "Standard"}</Radio>
        <Radio value="2">{title == "Gender" ? "Female" : "Neural"}</Radio>
      </Stack>
    </RadioGroup>
  );
};

export default RadioComp;
