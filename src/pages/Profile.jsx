import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Profile = () => {
  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Profile Page</Text>
        <Text>Details about the user will go here.</Text>
      </Box>
    </Box>
  );
};

export default Profile;