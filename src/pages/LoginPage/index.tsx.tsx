import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ForgotPswdForm } from "./components/forgotPswdForm";
import { LoginForm } from "./components/loginForm";

interface LoginFormProps {
  onForgotPassword?: () => void;
}

export const Login = (props: LoginFormProps) => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const handleForgotPassword = () => {
    setForgotPassword(true);
  };
  return (
    <Flex
      w={"100vw"}
      h={"100vh"}
      bgImage={"url('/assets/KV_Maratona_03.png')"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      textColor={"white"}
      padding={"1rem"}
    >
      <Flex
        w={"50%"}
        h={"100%"}
        align={"center"}
        justify={"center"}
        flexDir={"column"}
        display={["none", "flex"]}
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
        <Flex
          justify={"center"}
          pl={"13rem"}
          pt={"5rem"}
          display={["none", "flex"]}
        >
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
        w={["100%", "50%"]}
        h={"100%"}
        align={"center"}
        justify={"center"}
        flexDir={"column"}
      >
        <Flex justify={"center"} flexDir={"column"}>
          {" "}
          <Image
            src="/assets/logo-mkp-login.svg"
            alt="Logo"
            w={["80%", "100%"]}
            alignSelf={"center"}
          />
          {forgotPassword ? (
            <ForgotPswdForm onCancel={() => setForgotPassword(false)} />
          ) : (
            <LoginForm onForgotPassword={handleForgotPassword} />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
