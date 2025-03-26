import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  IconButton,
  Image,
  Link,
  useColorMode,
  Switch
} from '@chakra-ui/react';
// Import icons from react-icons
import { GiHamburgerMenu as HamburgerIcon } from 'react-icons/gi';
import { IoMdClose as CloseIcon } from 'react-icons/io';
import { FaMoon, FaSun } from 'react-icons/fa';

// NavLink component
const NavLink = ({ children, href, colorMode }) => (
  <Link
    px={2}
    py={1}
    rounded="md"
    _hover={{
      textDecoration: 'none',
      bg: colorMode === 'dark' ? 'gray.600' : 'gray.200',
    }}
    href={href}
    fontWeight="medium"
    color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'} // Ensure visibility
  >
    {children}
  </Link>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box 
      as="nav" 
      bg={colorMode === 'dark' ? 'gray.700' : 'white'} 
      color={colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800'} 
      position="fixed" 
      width="full" 
      zIndex={10}
    >
      <Flex h={16} alignItems="center" justifyContent="space-between" mx="auto" px={4}>
        <Flex alignItems="center">
          <Image 
            src="/img/logo.png" 
            alt="The Creamery Co. Logo" 
            boxSize="50px"
            mr={2}
          />
          <Text fontSize="xl" fontWeight="bold" letterSpacing="wide">
            The Creamery Co.
          </Text>
        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Stack direction="row" spacing={4} mr={4}>
            <NavLink href="#home" colorMode={colorMode}>Home</NavLink>
            <NavLink href="#menu" colorMode={colorMode}>Menu</NavLink>
            <NavLink href="#services" colorMode={colorMode}>Special Occasions</NavLink>
          </Stack>
          
          {/* Theme Toggler */}
          <Flex alignItems="center">
            <Box mr={2}>
              {colorMode === 'dark' ? <FaMoon /> : <FaSun />}
            </Box>
            <Switch 
              isChecked={colorMode === 'dark'}
              onChange={toggleColorMode}
              colorScheme="gray"
            />
          </Flex>
        </Flex>

        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={toggleMenu}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
        />
      </Flex>

      {/* Mobile menu */}
      {isOpen && (
        <Box 
          pb={4} 
          display={{ md: 'none' }} 
          bg={colorMode === 'dark' ? 'gray.700' : 'gray.50'} // Updated light mode background
        >
          <Stack as="nav" spacing={4} px={4}>
            <NavLink href="#home" colorMode={colorMode}>Home</NavLink>
            <NavLink href="#menu" colorMode={colorMode}>Menu</NavLink>
            <NavLink href="#services" colorMode={colorMode}>Special Occasions</NavLink>
            
            {/* Mobile Theme Toggler */}
            <Flex alignItems="center">
              <Box mr={2}>
                {colorMode === 'dark' ? <FaMoon /> : <FaSun />}
              </Box>
              <Switch 
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
                colorScheme="gray"
              />
              <Text ml={2}>
                {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
              </Text>
            </Flex>
          </Stack>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;