import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HomeVideosList } from "../../components/HomeVideosList";

export const Home = () => (
  <>
    <Flex w={"100%"} h={"100vh"} flexDir={"column"}>
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
        <VStack w={"50%"} h={"100%"} pt={"4rem"}>
          <Flex
            w={"100%"}
            h={"100%"}
            align={"center"}
            justify={"center"}
            zIndex={"99"}
            pb={"6rem"}
          >
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
              <Text w={"60%"} pt={"3rem"}>
                Acesse os conteúdos, complete os quizzes e receba os
                certificados.
              </Text>
            </Flex>
          </Flex>
        </VStack>
        <VStack w={"40%"} zIndex={2}>
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
                  _hover={{
                    backgroundColor: "var(--chakra-colors-yellow-200)",
                  }}
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
                  Saiba mais
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </VStack>
      </Flex>

      <Flex pt={"4rem"} flexDir={"column"} w={"80%"} pb={"4rem"}>
        <SimpleGrid
          columns={1}
          spacing={8}
          w={"100%"}
          placeItems={"center"}
          _after={{
            content: '""',
            position: "absolute",
            zIndex: 1,
            backgroundImage:
              "linear-gradient(to bottom, rgba(255,255,255,0), #1B052A 60%);",

            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Text fontSize="xl" w="75%" zIndex={"9"}>
            <b>Em breve</b>
          </Text>{" "}
          <HStack zIndex={"99"} w="75%">
            <HomeVideosList
              src="assets/testes-img-home/foto1.png"
              alt="teste"
              borderRadius="full"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto2.png"
              alt="teste"
              borderRadius="full"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto3.png"
              alt="teste"
              borderRadius="full"
              boxSize="190px"
            />
          </HStack>
          <Text fontSize="xl" w="75%" zIndex={"9"}>
            <b>Últimos lançamentos</b>
          </Text>{" "}
          <HStack zIndex={"99"} w="75%">
            <HomeVideosList
              src="assets/testes-img-home/foto4.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto5.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto6.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto7.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto8.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
          </HStack>
          <Text fontSize="xl" w="75%" zIndex={"9"}>
            <b>Assistir novamente</b>
          </Text>{" "}
          <HStack zIndex={"99"} w="75%">
            <HomeVideosList
              src="assets/testes-img-home/foto9.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto10.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto11.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
          </HStack>
          <Text fontSize="xl" w="75%" zIndex={"9"}>
            <b>Sugestões para você</b>
          </Text>{" "}
          <HStack zIndex={"99"} w="75%">
            <HomeVideosList
              src="assets/testes-img-home/foto12.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto13.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto2.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto8.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
            <HomeVideosList
              src="assets/testes-img-home/foto4.png"
              alt="teste"
              borderRadius="25px"
              boxSize="190px"
            />
          </HStack>
        </SimpleGrid>
      </Flex>
    </Flex>
  </>
);
