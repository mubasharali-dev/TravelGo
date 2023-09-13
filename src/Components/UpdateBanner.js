import { Box, Heading, Image, Input, Button, Stack } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

import { useEffect, useState } from "react";

const TestimonialCard = (props) => {
  const [imgLink, setImgLink] = useState("");

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const handleSubmit = async () => {
        try {
          let res = await fetch(
            "https://travel-site-saturnbored.onrender.com/admin/banners",
            {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}`,
              },
              body: JSON.stringify({
                page: props.name,
                img_link: imgLink,
              }),
            }
          );
          res = await res.json();
          props.setFetchBanners(!props.fetchBanners);
        } catch (err) {
          console.log(err.message);
        }
      };
      handleSubmit();
      setClicked(false);
    }
  }, [imgLink, clicked]);

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={props.url}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.name}</Heading>
          <Input
            placeholder="Enter Url"
            onChange={(e) => {
              setImgLink(e.target.value);
            }}
          />
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => setClicked(true)}
          >
            Update Banner
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

const UpdateBanner = () => {
  const defaultImgLink =
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";

  const member = [
    {
      key: 1,
      name: "About Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      key: 2,
      name: "Home Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      key: 3,
      name: "Package Page Banner",
      url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  const [banners, setBanners] = useState([]);
  const [fetchBanners, setFetchBanners] = useState(false);
  const token = JSON.parse(localStorage.getItem("session")).token;

  useEffect(() => {
    const fetchBanners = async function () {
      try {
        let res = await fetch(
          "https://travel-site-saturnbored.onrender.com/admin/banners",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        res = await res.json();
        setBanners(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchBanners();
  }, [fetchBanners]);

  return (
    <>
      <Box
        mb="20px"
        display="flex"
        flexDir={"column"}
        justifyContent="center"
        alignItems={"center"}
        gap="10vw"
      >
        {banners?.map((el, index) => (
          <TestimonialCard
            key={index}
            name={el.page}
            url={el.img_link || defaultImgLink}
            token={token}
            fetchBanners={fetchBanners}
            setFetchBanners={setFetchBanners}
          />
        ))}
      </Box>
    </>
  );
};

export default UpdateBanner;
