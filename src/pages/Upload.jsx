import { Box, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Upload = () => {
  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Upload Page</Text>
        <Text>Form to upload photos will go here.</Text>
      </Box>
    </Box>
  );
};

export default Upload;