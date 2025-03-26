// components/Hero.jsx
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  FormControl,
  FormLabel,
  Container,
  VStack,
  useColorMode
} from '@chakra-ui/react';

import { MdEmail as EmailIcon } from 'react-icons/md';

function Hero() {
  const { colorMode } = useColorMode();

  return (
    <Box
      id="home"
      bgImage={colorMode === 'dark' 
        ? 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/img/hero.png")'
        : 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/img/hero.png")'
      }      
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      height="100vh"
      pt="80px"
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'white'}
    >
      <Container maxW="container.lg" height="100%">
        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          height="100%"
        >
          <Text 
            fontSize="xl" 
            fontWeight="light" 
            mb={2}
          >
            Spreading Joy One Scoop at a Time
          </Text>
          
          <Heading 
            as="h1" 
            size="2xl" 
            textAlign="center" 
            letterSpacing="6px"
            mb={10}
          >
            <Text as="span" fontSize="2xl">Welcome to</Text> The Creamery Co.
          </Heading>
          
          <Box 
            bg={colorMode === 'dark' ? 'gray.700' : 'gray.800'} 
            p={6} 
            borderRadius="md" 
            width={{ base: "100%", md: "450px" }}
            mt={8}
          >
            <VStack spacing={4} align="stretch">
              <FormControl>
              <FormLabel 
                color={colorMode === 'dark' ? 'gray.200' : 'white'} 
                textAlign="center" 
                fontSize="xl" 
                fontWeight="bold" 
              >
                Stay Ahead of the Scoop
                <h2 style={{ marginTop: "0.5em", fontSize: "14px", fontWeight: "normal" }}>
                  Sign up for Exclusive Deals and New Menu Alerts!
                </h2>
              </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <EmailIcon color="gray.300" />
                  </InputLeftElement>
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    bg={colorMode === 'dark' ? 'gray.600' : 'white'} 
                    color={colorMode === 'dark' ? 'white' : 'gray.800'}
                  />
                </InputGroup>
              </FormControl>
              <Button 
                borderColor={colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.300'}
                color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700'}
                variant="outline"
                size="md"
                width="full"
                _hover={{
                  bg: colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100'
                }}
              >
                Subscribe
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Hero;