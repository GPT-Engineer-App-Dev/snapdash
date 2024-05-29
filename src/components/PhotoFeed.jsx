import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const PhotoFeed = () => {
  const [photos, setPhotos] = useState([
    { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
    { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
    { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
    { id: 4, src: "https://via.placeholder.com/300", alt: "Photo 4" },
    { id: 5, src: "https://via.placeholder.com/300", alt: "Photo 5" },
    { id: 6, src: "https://via.placeholder.com/300", alt: "Photo 6" },
  ]);

  useEffect(() => {
    // Logic to fetch photos from a server and update the state
    // For now, we'll use the initial state
  }, []);

return (
    <Box p={4}>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={4}>
        {photos.map((photo) => (
          <Image key={photo.id} src={photo.src} alt={photo.alt} borderRadius="md" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PhotoFeed;