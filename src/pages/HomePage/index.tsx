import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Home = () => (
  <Flex
    w={"100vw"}
    h={"100vh"}
    _after={{
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      zIndex: 99,
      backgroundImage:
        "linear-gradient(to bottom, rgba(255,255,255,0), #1B052A 100%);",

      width: "100%",
      height: "25%",
    }}
  >
    <Flex
      w={"100%"}
      h={"100%"}
      bgImg={"assets/home-img.png"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      textColor={"white"}
      padding={"1rem"}
      flexDir={"column"}
    >
      <Flex p={10}>
        <HStack spacing={8}>
          <Image src="assets/logo-mkp-login.svg" alt="Logo" w={"15%"} />
          <Link href="/login">Início</Link>
          <Link href="/register">Minha Lista</Link>
          <Link href="/register">Séries</Link>
          <Link href="/register">Pesquisar</Link>
        </HStack>
      </Flex>
      <VStack w={"50%"} h={"50%"}>
        <Flex w={"100%"} h={"80%"} align={"center"} justify={"center"}>
          <Flex justify={"center"} flexDir={"column"}>
            <Heading as="h2" size="2xl">
              O APRENDIZADO
            </Heading>
            <Heading
              as="h2"
              size="3xl"
              style={{
                WebkitTextStroke: "0.5px #FEC242",
                WebkitTextFillColor: "transparent",
              }}
            >
              NUNCA
            </Heading>{" "}
            <Heading as="h2" size="3xl" textColor={"#FEC242"}>
              TERMINA
            </Heading>
            <Text w={"60%"}>
              Acesse os conteúdos, complete os quizzes e receba os certificados.
            </Text>
          </Flex>
        </Flex>
      </VStack>
      <VStack w={"40%"}>
        <Flex w={"100%"} align={"center"} justify={"center"}>
          <Flex justify={"center"} flexDir={"column"}>
            <Text>Performance • Crescimento • Desenvolvimento</Text>
            <Flex w={"100%"} justify={"space-evenly"} pt={4}>
              <Button
                backgroundColor={"#FEC242"}
                textColor={"purple.900"}
                fontWeight={"bold"}
                borderRadius={"3xl"}
                w={"100%"}
                _hover={{ backgroundColor: "var(--chakra-colors-yellow-200)" }}
              >
                {" "}
                Assistir
              </Button>
              <Button
                backgroundColor={"rgb(255 255 255 / 25%)"}
                fontWeight={"bold"}
                borderRadius={"3xl"}
                w={"100%"}
                _hover={{ backgroundColor: "rgb(255 255 255 / 45%)" }}
              >
                Saiba Mais
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  </Flex>
);
