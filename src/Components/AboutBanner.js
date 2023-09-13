import { Container, Stack, Text, Icon } from "@chakra-ui/react";

import mapp from "../Images/mapp.png";

export default function AboutBanner() {
  return (
    <Container
      maxW={"100%"}
      className="head-container"
      px={"4vw"}
      marginTop={"0"}
      maxHeight={{ lg: "100vh", md: "90vh", sm: "80vh", base: "75vh" }}
    >
      <Stack
        className="bg-img"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 0 }}
        display="flex"
        direction={{ base: "column", md: "row" }}
        alignItems={{ lg: "left", md: "center" }}
        justifyContent={{ lg: "space-between", md: "center" }}
        bgImage={mapp}
        bgRepeat="no-repeat"
        backgroundPosition={"center"}
        bgSize="80%"
      >
        <Stack
          flex={1}
          spacing={{ base: 0, md: 0 }}
          minH={{ lg: "100vh", md: "100vh", sm: "60vh", base: "60vh" }}
          alignItems={"space-between"}
          justifyContent="center"
        >
          <Text
            fontWeight={"bold"}
            fontSize={{ base: "30px", md: "50px", lg: "56px" }}
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              zIndex: -1,
            }}
          >
            About Us
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
}

export const Blob = (props) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
