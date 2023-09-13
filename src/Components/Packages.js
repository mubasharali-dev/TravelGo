import React, { useState } from "react";
import { Box, Button, Hide, Show, SimpleGrid, Text } from "@chakra-ui/react";
import PackageCard from "./Cards/PackageCard";

import packages1 from "../Images/packages1.png";
import packages2 from "../Images/packages2.png";
import packages3 from "../Images/packages3.png";

const data = [packages1, packages2, packages3];

const data2 = [packages1, packages2];

const options = ["Maldives", "Finland", "Switzerland", "Canada", "More"];

const Option = ({ children, isSelected, handleClick }) => {
  return (
    <Button
      colorScheme={"telegram"}
      variant={isSelected ? "solid" : "outline"}
      pt={"15px"}
      pl={["10px", "25px", "15px", "5px"]}
      py={"35px"}
      size="lg"
      onClick={handleClick}
      borderRadius="0px"
    >
      {children}
    </Button>
  );
};

const Packages = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Box
      pl={["10px", "10px", "10px", "70px"]}
      pr={["10px", "10px", "10px", "70px"]}
      mt={["100px", "100px", "100px", "150px"]}
      mb={"100px"}
      width="full"
    >
      <Text
        h={["33px", "33px", "44px", "44px"]}
        textAlign={"center"}
        fontWeight={700}
        fontSize={["17px", "32px", "32px", "32px"]}
        lineHeight={"44px"}
        mb={"10px"}
      >
        Best Packages For You
      </Text>
      <Text
        textAlign={"center"}
        fontSize={["12px", "14px", "14px", "16px"]}
        color={"#5A5A5A"}
        pt={"20px"}
      >
        This is a unique experience on ship, sea and land, exploring different
        coral islands of Lakshadweep.
      </Text>
      <Box
        display="flex"
        justifyContent={"center"}
        ml={{ sm: "120px", base: "120px" }}
      >
        <SimpleGrid
          columns={[3, 4, 5, 6]}
          mt={"50px"}
          mb={"50px"}
          pl={["", "70px", "70px", "70px"]}
          gap="1px"
          spacing={"1"}
          ml={{ lg: "10vw", sm: "25vw" }}
          textAlign="center"
          width={"full"}
          minWidth="100vw"
        >
          <Option isSelected={selected == 0} handleClick={() => setSelected(0)}>
            {options[0]}
          </Option>
          <Hide below="700px">
            <Option
              isSelected={selected == 1}
              handleClick={() => setSelected(1)}
            >
              {options[1]}
            </Option>
            <Hide below="800px">
              <Option
                isSelected={selected == 2}
                handleClick={() => setSelected(2)}
              >
                {options[2]}
              </Option>
              <Hide below="900px">
                <Option
                  isSelected={selected == 3}
                  handleClick={() => setSelected(3)}
                >
                  {options[3]}
                </Option>
              </Hide>
            </Hide>
          </Hide>
          <Option isSelected={selected == 4} handleClick={() => setSelected(4)}>
            {options[4]}
          </Option>
        </SimpleGrid>
      </Box>
      <Hide below="900px">
        <SimpleGrid columns={[1, 2, 2, 3]}>
          {data.map((el, index) => (
            <PackageCard key={index} url={el} />
          ))}
        </SimpleGrid>
      </Hide>
      <Show below="900px">
        <SimpleGrid columns={[1]}>
          {data2.map((el, index) => (
            <Box display="flex" justifyContent={"center"}>
              <PackageCard key={index} url={el} />
            </Box>
          ))}
        </SimpleGrid>
      </Show>

      <Button
        colorScheme="blue"
        variant="outline"
        display={"block"}
        m={"auto"}
        mt={"50px"}
      >
        Discover More
      </Button>
    </Box>
  );
};

export default Packages;
