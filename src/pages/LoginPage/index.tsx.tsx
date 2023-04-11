import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

export const Login = () => (
  <Flex
    w={"100vw"}
    h={"100vh"}
    bgImage={"url('/assets/KV_Maratona_03.png')"}
    bgSize={"cover"}
    bgPosition={"center"}
    bgRepeat={"no-repeat"}
    textColor={"white"}
  >
    <Flex
      w={"50%"}
      h={"100%"}
      align={"center"}
      justify={"center"}
      flexDir={"column"}
    >
      <Flex justify={"center"} flexDir={"column"}>
        <Heading
          as="h2"
          size="2xl"
          style={{
            WebkitTextStroke: "0.5px #FEC242",
            WebkitTextFillColor: "transparent",
          }}
        >
          BEM-VINDE,
        </Heading>{" "}
        <Heading as="h2" size="4xl" textColor={"#FEC242"}>
          LIFELONG <br />
          LEARNER!
        </Heading>
      </Flex>
      <Flex justify={"center"} pl={"13rem"} pt={"5rem"}>
        <Flex w={"100%"}>
          {" "}
          <Text fontSize="xl">
            A Universidade Mark Up está on para facilitar o seu acesso a
            treinamentos e conteúdos exclusivos.
            <br /> <br /> <b>Entre e keep learning!</b>
          </Text>
        </Flex>
      </Flex>
    </Flex>
    <Flex
      w={"50%"}
      h={"100%"}
      align={"center"}
      justify={"center"}
      flexDir={"column"}
    >
      <Flex justify={"center"} flexDir={"column"}>
        {" "}
        <Image src="/assets/logo-mkp-login.svg" alt="Logo" w={"100%"} />
        <FormControl>
          <Stack spacing={3} w={"70%"}>
            <FormLabel fontSize="medium" pt={"3rem"}>
              E-mail
            </FormLabel>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              size="lg"
              fontSize={"13px"}
              borderColor={"white"}
              marginTop={"4px !important"}
              _placeholder={{ color: "white" }}
              borderRadius={"3xl"}
            />

            <FormLabel fontSize="medium" pt={"1rem"}>
              Senha
            </FormLabel>
            <Input
              placeholder="Digite sua senha de acesso"
              size="lg"
              fontSize={"13px"}
              borderColor={"white"}
              marginTop={"4px !important"}
              _placeholder={{
                color: "white",
              }}
              borderRadius={"3xl"}
              type="password"
            />
            <VStack justify={"center"} fontSize={"11px"}>
              <Link href="/home" color={"#ffffff"} pb={8}>
                {" "}
                Esqueceu sua senha?{" "}
              </Link>
            </VStack>
            <Button fontWeight={"bold"} type="submit" borderRadius={"3xl"}>
              {" "}
              ENTRAR{" "}
            </Button>
            <Button
              backgroundColor={"#FEC242"}
              textColor={"purple.900"}
              fontWeight={"bold"}
              borderRadius={"3xl"}
              _hover={{ backgroundColor: "var(--chakra-colors-yellow-300)" }}
            >
              {" "}
              CADASTRAR{" "}
            </Button>
          </Stack>
        </FormControl>
      </Flex>
    </Flex>
  </Flex>
);
