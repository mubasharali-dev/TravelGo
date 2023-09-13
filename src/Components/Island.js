import React from "react";
import { Box, Hide, Show, SimpleGrid, Text } from "@chakra-ui/react";
import IslandCard from "./Cards/IslandCard";

import islands1 from "../Images/islands1.png";
import islands2 from "../Images/islands2.png";
import islands3 from "../Images/islands3.png";
import islands4 from "../Images/islands4.png";
import islands5 from "../Images/islands5.png";
import islands6 from "../Images/islands6.png";

const dataForDesktop = [
  islands1,
  islands2,
  islands3,
  islands4,
  islands5,
  islands6,
];

const dataBelowDesktop = [islands1, islands2, islands3];

const Island = () => {
  return (
    <Box
      mt={"100px"}
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
    >
      <Text
        textAlign={"center"}
        fontSize={"32px"}
        fontWeight={"bold"}
        color={"#3A3A3A"}
        mb={"15px"}
      >
        Island Stays
      </Text>

      <Text
        textAlign={"center"}
        m="auto"
        fontSize={"16px"}
        color={"#5A5A5A"}
        w={["310px", "528px", "700px", "1106px"]}
      >
        One can choose from a variety of beautiful coral islands which offers
        different staying experiences from thatched huts to luxurious modern
        properties. Every island offers a wider range of water sports and beach
        activities for you to enjoy.
      </Text>

      <Hide below="800px">
        <SimpleGrid
          columns={[1, 2, 2, 3]}
          mt={10}
          gap="5"
          justifyContent={"center"}
          alignItems="center"
        >
          {dataForDesktop.map((el, index) => (
            <IslandCard key={index} url={el} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="800px">
        <SimpleGrid columns={[1]} mt={10}>
          {dataBelowDesktop.map((el, index) => (
            <Box display={"flex"} justifyContent="center" key={index}>
              <IslandCard key={index} url={el} />
            </Box>
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
};

export default Island;
