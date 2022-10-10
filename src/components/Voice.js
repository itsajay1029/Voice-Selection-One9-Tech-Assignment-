import React from "react";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import User from "./User";
import { useContext } from "react";
import { Context } from "../Contexts/Context";
import NoResultsFound from "./NoResultsFound";

const Voice = () => {
  const { data } = useContext(Context);

  return (
    <Box w="75%" p={4} h="100%" color="black" overflowY={"scroll"}>
      {/* To display all results as per the selection of user */}
      {data.length === 0 ? (
        //  When no results exists for the selection
        <NoResultsFound />
      ) : (
        <Grid templateColumns="repeat(3, 3fr)" gap={6}>
          {/* Repsents all data in form of a grid */}

          {data.map((g) => {
            return (
              <GridItem key={g.id}>
                {/* Every particular entry from the database */}
                <User user={g} />
              </GridItem>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Voice;
