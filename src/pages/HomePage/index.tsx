import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Carousel, Provider } from "chakra-ui-carousel";
import { MdList, MdOutlineHome, MdOutlineLocalMovies } from "react-icons/md";
import { HomeVideosList } from "../../components/HomeVideos/HomeVideosList";
import { Show } from "../../components/Show";

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
        <Show on={["mobile", "mobile-landscape"]}>
          <Flex p={3} zIndex={999} w={"100%"} justify={"space-between"}>
            <Menu>
              <MenuButton
                backgroundColor={"rgba(255, 255, 255, 0.45)"}
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="solid"
                size={"lg"}
              />
              <MenuList backgroundColor={"rgba(255, 255, 255, 0.45)"}>
                <MenuItem
                  backgroundColor={"rgba(255, 255, 255, 0.02)"}
                  icon={<MdOutlineHome />}
                >
                  Início
                </MenuItem>
                <MenuItem
                  backgroundColor={"rgba(255, 255, 255, 0.02)"}
                  icon={<MdList />}
                >
                  Minha Lista
                </MenuItem>
                <MenuItem
                  backgroundColor={"rgba(255, 255, 255, 0.02)"}
                  icon={<MdOutlineLocalMovies />}
                >
                  Séries
                </MenuItem>
                <MenuItem
                  backgroundColor={"rgba(255, 255, 255, 0.02)"}
                  icon={<SearchIcon />}
                >
                  Pesquisar
                </MenuItem>
              </MenuList>
            </Menu>
            <Image src="assets/logo-mkp-login.svg" alt="Logo" w={"60%"} />
          </Flex>
        </Show>
        <Show on={"desktop"}>
          <Flex p={10} zIndex={4}>
            <HStack spacing={8}>
              <Image src="assets/logo-mkp-login.svg" alt="Logo" w={"15%"} />
              <Link href="/login">Início</Link>
              <Link href="/register">Minha Lista</Link>
              <Link href="/register">Séries</Link>
              <Link href="/register">Pesquisar</Link>
            </HStack>
          </Flex>
        </Show>
        <Show on={"desktop"}>
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
                <Heading as="h2" size="3xl">
                  O APRENDIZADO
                </Heading>
                <Heading
                  as="h2"
                  size="4xl"
                  style={{
                    WebkitTextStroke: "0.5px #FEC242",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  NUNCA
                </Heading>{" "}
                <Heading as="h2" size="4xl" textColor={"#FEC242"}>
                  TERMINA
                </Heading>
                <Text w={"70%"} py={3}>
                  Acesse os conteúdos, complete os quizzes e receba os
                  certificados.
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </Show>
        <Show on={["mobile", "mobile-landscape"]}>
          <VStack w={"100%"} h={"100%"} pt={"2rem"}>
            <Flex
              w={"100%"}
              h={"100%"}
              align={"center"}
              justify={"center"}
              zIndex={"99"}
            >
              <Flex justify={"center"} flexDir={"column"} pt={"4rem"}>
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
                <Text w={"70%"} py={3}>
                  Acesse os conteúdos, complete os quizzes e receba os
                  certificados.
                </Text>
              </Flex>
            </Flex>
          </VStack>
        </Show>
        <Show on={"desktop"}>
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
        </Show>
        <Show on={["mobile", "mobile-landscape"]}>
          <VStack w={"100%"} zIndex={2}>
            <Flex w={"100%"} align={"center"} justify={"center"}>
              <Flex justify={"center"} flexDir={"column"} pt={"4rem"}>
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
        </Show>
      </Flex>
      <Show on={["mobile", "mobile-landscape"]}>
        <Flex pt={"4rem"} flexDir={"column"} w={"100%"} pb={"4rem"}>
          <SimpleGrid
            columns={1}
            spacing={8}
            w={"100%"}
            placeItems={"center"}
            _after={{
              content: '""',
              position: "absolute",
              zIndex: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0), #1B052A 45%);",

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
            <HStack zIndex={"99"} w="100%" justify={"center"}>
              <HomeVideosList
                src="assets/testes-img-home/foto1.png"
                alt="teste"
                borderRadius="full"
                boxSize="150px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto2.png"
                alt="teste"
                borderRadius="full"
                boxSize="150px"
              />
            </HStack>
            <Text fontSize="xl" w="75%" zIndex={"9"}>
              <b>Últimos lançamentos</b>
            </Text>{" "}
            <Box zIndex={"99"} w="75%">
              <Provider>
                <Carousel gap={1}>
                  <HomeVideosList
                    src="assets/testes-img-home/foto4.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto5.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto5.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto5.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto5.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto5.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                </Carousel>
              </Provider>
            </Box>
            <Text fontSize="xl" w="75%" zIndex={"9"}>
              <b>Assistir novamente</b>
            </Text>{" "}
            <Box zIndex={"99"} w="75%">
              <Provider>
                <Carousel gap={1}>
                  <HomeVideosList
                    src="assets/testes-img-home/foto9.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto10.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto10.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto10.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto10.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                </Carousel>
              </Provider>
            </Box>
            <Text fontSize="xl" w="75%" zIndex={"9"}>
              <b>Sugestões para você</b>
            </Text>{" "}
            <Box zIndex={"99"} w="75%">
              <Provider>
                <Carousel gap={1}>
                  <HomeVideosList
                    src="assets/testes-img-home/foto12.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                  <HomeVideosList
                    src="assets/testes-img-home/foto13.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto13.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto13.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />{" "}
                  <HomeVideosList
                    src="assets/testes-img-home/foto13.png"
                    alt="teste"
                    borderRadius="25px"
                    boxSize="145px"
                  />
                </Carousel>
              </Provider>
            </Box>
          </SimpleGrid>
        </Flex>
      </Show>
      <Show on={"desktop"}>
        <Flex pt={"4rem"} flexDir={"column"} w={"80%"} pb={"4rem"}>
          <SimpleGrid
            columns={1}
            spacing={8}
            w={"100%"}
            placeItems={"center"}
            _after={{
              content: '""',
              position: "absolute",
              zIndex: 0,
              backgroundImage:
                "linear-gradient(to bottom, rgba(255,255,255,0), #1B052A 55%);",

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
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto5.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto6.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto7.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto8.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
            </HStack>
            <Text fontSize="xl" w="75%" zIndex={"9"}>
              <b>Assistir novamente</b>
            </Text>{" "}
            <HStack zIndex={"99"} w="75%">
              <HomeVideosList
                src="assets/testes-img-home/foto9.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto10.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto11.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
            </HStack>
            <Text fontSize="xl" w="75%" zIndex={"9"}>
              <b>Sugestões para você</b>
            </Text>{" "}
            <HStack zIndex={"99"} w="75%">
              <HomeVideosList
                src="assets/testes-img-home/foto12.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto13.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto2.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto8.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
              <HomeVideosList
                src="assets/testes-img-home/foto4.png"
                alt="teste"
                borderRadius="63px"
                htmlWidth="190px"
                htmlHeight="200px"
              />
            </HStack>
          </SimpleGrid>
        </Flex>
      </Show>
    </Flex>
  </>
);
