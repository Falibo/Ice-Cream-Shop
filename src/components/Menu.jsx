import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  VStack,
  Divider,
  Container,
  Card,
  CardBody,
  CardFooter,
  Stack,
  useColorMode
} from '@chakra-ui/react';

const MenuCard = ({ title, image, description }) => {
  const { colorMode } = useColorMode();

  return (
    <Card 
      w={{ base: '100%', md: 'sm' }} // Full width on small screens, max width on medium+
      maxW={{ base: '100%', md: 'sm' }}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.02)' }}
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
      borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        height="200px"
      />
      <CardBody>
        <Heading 
          size="md" 
          mb={2}
          color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
        >
          {title}
        </Heading>
        <Text color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.600'}>
          {description}
        </Text>
      </CardBody>
      <CardFooter>
        <Button 
          borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
          color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
          variant="outline"
          _hover={{
            bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
          }}
        >
          View here
        </Button>
      </CardFooter>
    </Card>
  );
};

const menuItems = [
  {
    title: "Chocolate Chip",
    image: "/Ice-Cream-Shop/img/chocolate-chip.jpg",
    description: "Rich, creamy vanilla ice cream loaded with semi-sweet chocolate chips, a classic combination that's hard to resist."
  },
  {
    title: "Nutella Ice Cream",
    image: "/Ice-Cream-Shop/img/nutella-ice-cream.jpg",
    description: "For Nutella lovers, we've crafted the ultimate treat: a decadent ice cream infused with the unmistakable flavor of this chocolate-hazelnut classic."
  },
  {
    title: "Chocolate",
    image: "/Ice-Cream-Shop/img/chocolate.jpg",
    description: "Indulge in our rich, velvety chocolate ice cream, made with the finest cocoa and a touch of sweetness."
  },
  {
    title: "Candies",
    image: "/Ice-Cream-Shop/img/candy.jpg",
    description: "Treat yourself to a colorful mix of candies swirled into a sweet and creamy base."
  },
  {
    title: "Maple Walnut Ice Cream",
    image: "/Ice-Cream-Shop/img/maple-walnut.jpg",
    description: "Experience the perfect balance of rich, velvety maple and crunchy, toasted walnuts in every creamy bite."
  },
  {
    title: "Milkshake",
    image: "/Ice-Cream-Shop/img/milkshake.jpg",
    description: "Treat yourself to a decadent blend of your favorite ice cream flavors, mixed to perfection with milk and topped with whipped cream and a sprinkle of fun."
  }
];

function Menu() {
  const { colorMode } = useColorMode();

  return (
    <Box 
      id="menu" 
      py={12} 
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
    >
      <Container maxW="container.xl">
        <VStack spacing={4} mb={8}>
          <Heading 
            as="h2" 
            size="lg" 
            textAlign="center" 
            fontWeight="light" 
            letterSpacing={6}
            color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
          >
            Indulge in Our World-Class Ice Cream Creations
          </Heading>
          <Text 
            fontSize="md" 
            fontWeight="medium"
            color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.600'}
          >
            Check It Out
          </Text>
          <Divider 
            width="25%" 
            borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.400'} 
          />
        </VStack>
        
        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} // Single column on small screens
          spacing={{ base: 4, md: 8 }} // Adjust spacing for small screens
          px={{ base: 4, md: 0 }}
          justifyItems="center" // Center cards horizontally
        >
          {menuItems.map((item, index) => (
            <MenuCard key={index} title={item.title} image={item.image} description={item.description} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Menu;