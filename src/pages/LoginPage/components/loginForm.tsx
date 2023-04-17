import {
  FormControl,
  Stack,
  FormLabel,
  Input,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
interface LoginFormProps {
  onForgotPassword: () => void;
}
export const LoginForm = (props: LoginFormProps) => {
  return (
    <FormControl>
      <Stack spacing={3} w={["100%", "70%"]}>
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
          placeholder="Digite sua senha"
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
          <Link
            href="#"
            onClick={props.onForgotPassword}
            color={"#ffffff"}
            pb={8}
          >
            {" "}
            Esqueceu sua senha?{" "}
          </Link>
        </VStack>
        <Button
          backgroundColor={"rgb(255 255 255 / 25%)"}
          fontWeight={"bold"}
          type="submit"
          borderRadius={"3xl"}
          onClick={() => {
            window.location.href = "/home";
          }}
          _hover={{ backgroundColor: "rgb(255 255 255 / 45%)" }}
        >
          {" "}
          ENTRAR{" "}
        </Button>

        <Button
          backgroundColor={"#FEC242"}
          textColor={"purple.900"}
          fontWeight={"bold"}
          borderRadius={"3xl"}
          _hover={{
            backgroundColor: "var(--chakra-colors-yellow-200)",
          }}
        >
          {" "}
          CADASTRAR{" "}
        </Button>
      </Stack>
    </FormControl>
  );
};
