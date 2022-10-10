import React, { useState } from "react";
import { Box, Badge } from "@chakra-ui/react";
import { hasFlag } from "country-flag-icons";
import { BiError } from "react-icons/bi";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const User = ({ user }) => {
  // To get the flag for every country
  let url = `http://purecatamphetamine.github.io/country-flag-icons/3x2/${user.countryCode}.svg`;
  // To get Country Name from Country Code
  const lookup = require("country-code-lookup");
  let countryName = lookup.byIso(user.countryCode).country;

  // If voice is being played or not
  const [isPlaying, setIsPlaying] = useState(false);
  const toast = useToast();
  const handleClick = () => {
    //Plays the media file or gives an error
    try {
      const fileName = `${user.languageCode}-${user.countryCode}_${user.name}_${user.gender}_${user.type}.mp3`;
      const media = require(`../../voice-samples/${fileName}`);
      const music = new Audio(media);

      setIsPlaying(true);
      music.play();
      setTimeout(() => {
        setIsPlaying(false);
      }, music.duration | 6000);
    } catch (error) {
      toast({
        title: "No Voice Sample Found !",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      width="300px"
      height="200px"
      _hover={{
        boxShadow: "dark-lg",
      }}
      as={"button"}
      onClick={handleClick}
    >
      <Box m={3} display="flex" justifyContent={"space-around"} height={"10%"}>
        <Box width={"100%"} display="flex">
          <Box width={"20%"}>
            {hasFlag(user.countryCode) ? (
              <img alt={countryName} src={url} />
            ) : (
              <BiError />
            )}
          </Box>
          <Box fontFamily={"Poppins"} fontSize={"large"} ml={"70px"}>
            {user.name}
          </Box>
        </Box>
        <Box>
          {isPlaying ? (
            <AiFillPauseCircle fontSize={"large"} />
          ) : (
            <AiFillPlayCircle fontSize={"large"} />
          )}
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="baseline"
        flexDirection={"column"}
        mt={"30px"}
        ml={3}
      >
        <Badge borderRadius="full" px="2" colorScheme="teal" m={"7px"}>
          {user.gender}
        </Badge>
        <Badge borderRadius="full" px="2" bgColor="lightgrey" m={"7px"}>
          {user.language}
        </Badge>
        <Badge borderRadius="full" px="2" bgColor="lightgreen" m={"7px"}>
          {countryName}
        </Badge>
        <Badge borderRadius="full" px="2" bgColor="lightgreen" m={"7px"}>
          {user.type}
        </Badge>
      </Box>
    </Box>
  );
};

export default User;
