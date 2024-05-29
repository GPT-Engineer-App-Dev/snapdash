import { Container, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import PhotoFeed from "../components/PhotoFeed";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <VStack spacing={4} mt={4}>
        <PhotoFeed />
      </VStack>
    </Container>
  );
};

export default Index;