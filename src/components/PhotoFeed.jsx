import { Box, Image, SimpleGrid, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

const PhotoFeed = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1", likes: 0 },
    { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2", likes: 0 },
    { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3", likes: 0 },
    { id: 4, src: "https://via.placeholder.com/300", alt: "Photo 4", likes: 0 },
    { id: 5, src: "https://via.placeholder.com/300", alt: "Photo 5", likes: 0 },
    { id: 6, src: "https://via.placeholder.com/300", alt: "Photo 6", likes: 0 },
  ]);

  useEffect(() => {
    // Logic to fetch photos from a server and update the state
    // For now, we'll use the initial state
  }, []);

const handleLike = (id) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) =>
        photo.id === id ? { ...photo, likes: photo.likes + 1 } : photo
      )
    );
  };

  return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4}>
        {photos.map((photo) => (
          <Box key={photo.id} position="relative">
            <Image src={photo.src} alt={photo.alt} borderRadius="md" />
            <VStack position="absolute" bottom={2} left={2} spacing={1} align="start">
              <IconButton
                icon={<FaHeart />}
                colorScheme="red"
                variant="solid"
                size="sm"
                onClick={() => handleLike(photo.id)}
              />
              <Text color="white" fontWeight="bold">
                {photo.likes} {photo.likes === 1 ? "like" : "likes"}
              </Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PhotoFeed;