import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

interface ForgotPasswordProps {
  onCancel: () => void;
}
export const ForgotPswdForm = (props: ForgotPasswordProps) => {
  const [cancel, setCancel] = useState(false);

  const handleCancel = () => {
    setCancel(true);
    props.onCancel();
  };

  if (cancel) {
    return null;
  }
  return (
    <FormControl>
      <Stack spacing={3} w={["100%", "70%"]}>
        <FormLabel fontSize="medium" pt={"3rem"}>
          Digite seu e-mail para receber um link de recuperação de senha
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
          ENVIAR{" "}
        </Button>

        <Button
          backgroundColor={"#FEC242"}
          textColor={"purple.900"}
          fontWeight={"bold"}
          borderRadius={"3xl"}
          onClick={handleCancel}
          _hover={{
            backgroundColor: "var(--chakra-colors-yellow-200)",
          }}
        >
          {" "}
          CANCELAR{" "}
        </Button>
      </Stack>
    </FormControl>
  );
};
