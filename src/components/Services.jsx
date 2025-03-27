import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Input,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
  Divider,
  Container,
  Image,
  Flex,
  useColorMode
} from '@chakra-ui/react';

function Services() {
  const { colorMode } = useColorMode();

  return (
    <Box 
      id="services" 
      py={12} 
      bg={colorMode === 'dark' ? 'gray.800' : 'gray.100'}
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
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
            Let Us Help with Your Special Occasion Orders!
          </Heading>
          <Text 
            fontSize="md" 
            fontWeight="medium"
            color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.600'}
          >
            Make it a Celebration
          </Text>
          <Divider 
            width="25%" 
            borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.400'} 
          />
        </VStack>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={{ base: 4, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <FormControl>
              <FormLabel color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.700'}>
                Name
              </FormLabel>
              <Input 
                placeholder="Your Name" 
                bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'white'}
                borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                _placeholder={{
                  color: colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.500'
                }}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.700'}>
                Email
              </FormLabel>
              <Input 
                type="email" 
                placeholder="Your Email" 
                bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'white'}
                borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                _placeholder={{
                  color: colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.500'
                }}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.700'}>
                Contact
              </FormLabel>
              <Input 
                placeholder="Your Contact Number" 
                bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'white'}
                borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                _placeholder={{
                  color: colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.500'
                }}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel color={colorMode === 'dark' ? 'whiteAlpha.800' : 'gray.700'}>
                Message
              </FormLabel>
              <Textarea 
                placeholder="Enter Your Message Here" 
                rows={3} 
                bg={colorMode === 'dark' ? 'whiteAlpha.200' : 'white'}
                borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'white' : 'gray.800'}
                _placeholder={{
                  color: colorMode === 'dark' ? 'whiteAlpha.500' : 'gray.500'
                }}
              />
            </FormControl>
            
            <Button 
              borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
              color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
              variant="outline"
              size="lg"
              width="full"
              _hover={{
                bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.200'
              }}
            >
              Submit
            </Button>
          </VStack>
          
          <Flex 
            display={{ base: 'none', md: 'flex' }}
            justifyContent="center" 
            alignItems="center"
          >
            <Box 
            overflow="hidden" 
            borderRadius="md" 
            height="400px" 
            width="100%"
          >
            <Image
              src="/Ice-Cream-Shop/img/icecream-party.jpg"
              alt="Ice Cream"
              objectFit="cover"
              filter={colorMode === 'dark' ? 'brightness(0.7)' : 'none'}
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: 'scale(1.2)', 
              }}
              height="400px"
              width="100%"
            />
          </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Services;