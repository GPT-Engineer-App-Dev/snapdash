import { Box, Image, SimpleGrid } from "@chakra-ui/react";

const photos = [
  { id: 1, src: "https://via.placeholder.com/300", alt: "Photo 1" },
  { id: 2, src: "https://via.placeholder.com/300", alt: "Photo 2" },
  { id: 3, src: "https://via.placeholder.com/300", alt: "Photo 3" },
  { id: 4, src: "https://via.placeholder.com/300", alt: "Photo 4" },
  { id: 5, src: "https://via.placeholder.com/300", alt: "Photo 5" },
  { id: 6, src: "https://via.placeholder.com/300", alt: "Photo 6" },
];

const PhotoFeed = () => {
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