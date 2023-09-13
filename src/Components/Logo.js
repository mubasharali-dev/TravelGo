import { Box, Image } from "@chakra-ui/react";

import logo from "../Images/logo.png";

const Logo = () => {
  return (
    <>
      <Box>
        {/* box for logo */}
        <Image
          w={"99.35px"}
          h={"40px"}
          src = {logo}
        />
      </Box>
    </>
  );
};

export default Logo;
