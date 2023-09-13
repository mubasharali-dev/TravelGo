import { Box, Text, Heading, Button, Stack, Select } from "@chakra-ui/react";
import { Card, CardBody } from "@chakra-ui/react";

import { useEffect, useState } from "react";

const TestimonialCard = (props) => {
  const [newRole, setNewRole] = useState("");

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) {
      const handleSubmit = async () => {
        try {
          let res = await fetch(
            "https://travel-site-saturnbored.onrender.com/admin/team/update",
            {
              method: "PATCH",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${props.token}`,
              },
              body: JSON.stringify({
                email: props.email,
                newRole: newRole,
              }),
            }
          );
          res = await res.json();
          props.setFetchTeam(!props.fetchTeam);
        } catch (err) {
          console.log(err.message);
        }
      };
      handleSubmit();
      setClicked(false);
    }
  }, [newRole, clicked]);

  const handleDelete = async () => {
    try {
      let res = await fetch(
        "https://travel-site-saturnbored.onrender.com/admin/team/remove",
        {
          method: "PATCH",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.token}`,
          },
          body: JSON.stringify({
            email: props.email,
          }),
        }
      );
      res = await res.json();
      props.setFetchTeam(!props.fetchTeam);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Card shadow={"2xl"} borderRadius={"5%"} px={"30px"} maxW={{ lg: "50vw" }}>
      <CardBody>
        <Stack spacing="4" alignItems={"center"}>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Name :
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Email:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Role:
            </Heading>
            <Text pt="2" fontSize="sm">
              {props.role}
            </Text>
          </Box>

          <Select
            placeholder="Select sub-admin role"
            textAlign={"center"}
            maxW={"300px"}
            onChange={(e) => setNewRole(e.target.value)}
          >
            <option value="backend">Backend Engineer</option>
            <option value="frontend">Front Engineer</option>
            <option value="super">Super</option>
          </Select>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="blue"
              variant="solid"
              width="300px"
              onClick={() => setClicked(true)}
            >
              Submit
            </Button>
          </Stack>
          <Stack direction="row" spacing={4} align="center">
            <Button
              colorScheme="red"
              variant="solid"
              width="300px"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

const TeamMembers = () => {
  const [team, setTeam] = useState([]);
  const [fetchTeam, setFetchTeam] = useState(false);
  const token = JSON.parse(localStorage.getItem("session")).token;

  useEffect(() => {
    const fetchTeams = async function () {
      try {
        let res = await fetch(
          "https://travel-site-saturnbored.onrender.com/admin/team",
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
        setTeam(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchTeams();
  }, [fetchTeam]);

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
        {team?.map((el, index) => (
          <TestimonialCard
            key={index}
            name={el.name}
            role={el.privilege.role}
            email={el.email}
            token={token}
            fetchTeam={fetchTeam}
            setFetchTeam={setFetchTeam}
          />
        ))}
      </Box>
    </>
  );
};

export default TeamMembers;
