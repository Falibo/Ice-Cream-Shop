import React from 'react';
import {
  Box,
  Text,
  HStack,
  VStack,
  Link,
  Container,
  Flex,
  useColorMode
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTiktok, FaPinterest } from 'react-icons/fa';

function Footer() {
  const { colorMode } = useColorMode();

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTiktok, href: '#' },
    { icon: FaPinterest, href: '#' }
  ];

  const footerLinks = [
    'Accessibility Statement',
    'Franchise Opportunities',
    'Privacy Policy',
    'Terms of Use'
  ];

  return (
    <Box 
      as="footer" 
      py={8}
      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'}
    >
      <Container maxW="container.xl">
        <VStack spacing={6}>
          {/* Footer Links */}
          <Flex 
            flexWrap="wrap" 
            justifyContent="center" 
            gap={4}
            mb={4}
          >
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href="#"
                fontSize="sm"
                color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.600'}
                _hover={{ 
                  textDecoration: 'underline',
                  color: colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'
                }}
              >
                {link}
              </Link>
            ))}
          </Flex>

          {/* Social Icons */}
          <HStack spacing={4}>
            {socialLinks.map(({ icon: Icon, href }, index) => (
              <Link 
                key={index} 
                href={href} 
                color={colorMode === 'dark' ? 'whiteAlpha.700' : 'gray.700'}
                _hover={{ 
                  color: colorMode === 'dark' ? 'white' : 'black' 
                }}
              >
                <Icon size={24} />
              </Link>
            ))}
          </HStack>
          
          {/* Copyright */}
          <Text 
            fontSize="sm" 
            color={colorMode === 'dark' ? 'whiteAlpha.600' : 'gray.500'}
          >
            Copyright © {new Date().getFullYear()} Scoops Ice Cream Franchise, Inc. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer;