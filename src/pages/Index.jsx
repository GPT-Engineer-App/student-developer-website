import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Link, Divider, Container } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="center" textAlign="center">
          <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwbWFsZSUyMHN0dWRlbnQlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTEwNzgyMDB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Aniruddh Rao" />
          <Heading as="h1" size="2xl">
            Aniruddh Rao
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Student Developer
          </Text>
          <HStack spacing={4}>
            <Link href="https://github.com/aniruddhrao" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/aniruddhrao" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="mailto:aniruddh@example.com" isExternal>
              <FaEnvelope size={24} />
            </Link>
          </HStack>
          <Divider />
          <VStack spacing={4} align="stretch" textAlign="left">
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text fontSize="lg">Hi, I'm Aniruddh Rao, a passionate student developer. I love building web applications and exploring new technologies.</Text>
            <Text fontSize="lg">I'm currently pursuing my degree in Computer Science and honing my skills in web development. I have experience with HTML, CSS, JavaScript, and React.</Text>
          </VStack>
          <Divider />
          <VStack spacing={4} align="stretch" textAlign="left">
            <Heading as="h2" size="xl">
              Projects
            </Heading>
            <VStack align="stretch" spacing={4}>
              <Box>
                <Heading as="h3" size="lg">
                  Project 1
                </Heading>
                <Text>Description of Project 1</Text>
              </Box>
              <Box>
                <Heading as="h3" size="lg">
                  Project 2
                </Heading>
                <Text>Description of Project 2</Text>
              </Box>
            </VStack>
          </VStack>
          <Divider />
          <VStack spacing={4} align="center">
            <Heading as="h2" size="xl">
              Get in Touch
            </Heading>
            <Text fontSize="lg">Feel free to reach out to me for any inquiries or collaborations.</Text>
            <Link href="mailto:aniruddh@example.com" isExternal>
              aniruddh@example.com
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
