import { useState } from "react";
import { Box, Button, Image, Input, Text, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to upload the photo and update the feed
    console.log("Photo submitted:", selectedFile);
  };

  return (
    <Box>
      <NavBar />
      <Box p={4}>
        <Text fontSize="2xl">Upload Page</Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <Image src={preview} alt="Selected photo" boxSize="300px" />}
            <Button type="submit" colorScheme="blue">Upload Photo</Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default Upload;