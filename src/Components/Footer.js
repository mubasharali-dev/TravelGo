import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import Logo from "./Logo";
import FooterModal from "./FooterModal";
import SocialButton from "./Miscellaneous/SocialButton";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      display="flex"
      flexDir={"column"}
      justifyContent="center"
      alignItems={"center"}
      mt={"20vh"}
    >
      <FooterModal />
      <Container as={Stack} minW={"100vw"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr" }}
          spacing={20}
          justifyContent="space-between"
          pl={"10px"}
        >
          <Stack spacing={6}>
            <Box display={"flex"} gap="20px" flexDirection={"column"}>
              <Logo color={useColorModeValue("gray.700", "white")} />
              <Text fontSize={"sm"} textAlign="left" maxWidth={"20vw"}>
                Lorem Ipsum is simply dummy text of the printing and type
                setting industry.
              </Text>
            </Box>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Facebook"} href={"#"}>
                <FaFacebook />
              </SocialButton>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"Linkedin"} href={"#"}>
                <FaLinkedin />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>Events</Link>
            <Link href={"#"}>Blogs</Link>
            <Link href={"#"}>FAQ</Link>
            <Link href={"#"}>Join Us</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            <Link href={"#"}>Project</Link>
            <Link href={"#"}>Lorem</Link>
            <Link href={"#"}>Services</Link>
            <Link href={"#"}>Our Story</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact Us</ListHeader>
            <Link href={"#"}>travelgo@example.com</Link>
            <Link href={"#"}>+1 432493247</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
