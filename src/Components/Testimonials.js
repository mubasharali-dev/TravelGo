import React from "react";
import {
  Box,
  Button,
  Hide,
  Image,
  Show,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import TestimonialCard from "./Cards/TestimonialCard";

import oval1 from "../Images/oval1.png";
import oval2 from "../Images/oval2.png";
import oval3 from "../Images/oval3.png";

import mapp from "../Images/mapp.png";

const dataforDesktop = [
  {
    url: oval1,
    name: "Roman Rey",
  },
  {
    url: oval2,
    name: "Alex Tom",
  },
  {
    url: oval3,
    name: "Finn Balor",
  },
];

const dataBelowDesktop = [
  {
    url: oval1,
    name: "Roman Rey",
  },
  {
    url: oval2,
    name: "Alex Tom",
  },
];

const Testimonials = () => {
  return (
    <Box
      mt={"200px"}
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
      mb={"200px"}
    >
      <Hide below="500px">
        <Box
          position={"relative"}
          w={"100%"}
          bg={"#42A7C3"}
          display={"flex"}
          gap={{ lg: "10vw" }}
          justifyContent="center"
        >
          <Box
            w={{ lg: "100%" }}
            p={"20px"}
            display="flex"
            flexDir={"column"}
            justifyContent={"space-between"}
          >
            <Text
              textAlign={"left"}
              fontSize={["16px", "20px", "24px", "32px"]}
              fontWeight={"bold"}
              color={"white"}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Text textAlign={"left"} fontSize={"14px"} color={"white"} mt={8}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur ac quam in congue.
            </Text>
          </Box>
          <Box maxWidth={"50%"}>
            <Image w={"100%"} h={"100%"} src={mapp} alt="wolrd-map" />
            <Button position={"absolute"} bottom={"100px"} right={20}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Hide>

      <Show below="500px">
        <Box position={"relative"} w={"100%"} h={["197px"]} bg={"#42A7C3"}>
          <Image
            position={"absolute"}
            w={"100%"}
            h={"100%"}
            src={mapp}
            alt="wolrd-map"
          />
          <Box
            display="flex"
            flexDir={"column"}
            justifyContent="center"
            flexWrap={"wrap"}
            alignContent="center"
          >
            <Text
              textAlign={"center"}
              fontSize={["16px"]}
              fontWeight={"bold"}
              color={"white"}
              mt={5}
            >
              Let’s Ready to Explore The World With Us.
            </Text>
            <Button display="block" m={"auto"} mt={5} borderRadius={"20px"}>
              Contact Us
            </Button>
          </Box>
        </Box>
      </Show>

      <Text
        w={["250px", "300px", "300px", "380px"]}
        m={"auto"}
        mt={"100px"}
        textAlign={"center"}
        fontSize={["24px", "20px", "24px", "32px"]}
        fontWeight={"bold"}
      >
        What Our Clients Says About Us
      </Text>

      <Hide below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataforDesktop.map((el, index) => (
            <TestimonialCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]} mt={10}>
          {dataBelowDesktop.map((el, index) => (
            <TestimonialCard key={index} url={el.url} name={el.name} />
          ))}
        </SimpleGrid>
      </Show>
    </Box>
  );
};

export default Testimonials;
