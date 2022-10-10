import React from "react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useContext } from "react";
import { Context } from "../Contexts/Context";

const GridComp = ({ title }) => {
  const { setSelLang, setSelCountry, selLang, selCountry } =
    useContext(Context);

  const addOrRemove = (g) => {
    // When you select or unselect the checkbox, we fire this function
    let temp = [];
    if (title === "Language") {
      if (selLang.find((ele) => ele === g) === undefined) {
        selLang.forEach((element) => {
          temp.push(element);
        });
        temp.push(g);
      } else {
        selLang.forEach((element) => {
          if (element !== g) temp.push(element);
        });
      }
      setSelLang(temp);
    } else if (title === "Country") {
      if (selCountry.find((ele) => ele === g) === undefined) {
        selCountry.forEach((element) => {
          temp.push(element);
        });
        temp.push(g);
      } else {
        selCountry.forEach((element) => {
          if (element !== g) temp.push(element);
        });
      }
      setSelCountry(temp);
    }
  };

  // To get the list of all languages spoken around the world
  var languages = require("language-list")();
  let lang = languages.getData().map((x) => x.language);

  // To get the list of all countries in the world
  const countryList = require("country-list");
  let country = countryList.getNames();

  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={5} ml={5} mt={2}>
      {title == "Language" &&
        lang.map((g, ind) => {
          return (
            <GridItem key={ind}>
              <Checkbox
                isChecked={
                  selLang.find((ele) => ele === g) === undefined ? false : true
                }
                onChange={() => addOrRemove(g)}
              >
                {g}
              </Checkbox>
            </GridItem>
          );
        })}

      {title == "Country" &&
        country.map((g, ind) => {
          return (
            <GridItem key={ind} className="country">
              <Checkbox
                isChecked={
                  selCountry.find((ele) => ele === g) === undefined
                    ? false
                    : true
                }
                onChange={() => addOrRemove(g)}
              >
                {g}
              </Checkbox>
            </GridItem>
          );
        })}
    </Grid>
  );
};

export default GridComp;
