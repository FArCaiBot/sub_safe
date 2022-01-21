import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function ForgotPsw() {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "grayDark")}
      >
        <Stack
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "blueDark")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
            Olvidaste tu contraseña?
          </Heading>
          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color={useColorModeValue("gray.800", "gray.400")}
          >
            Recibirás un correo electrónico con un enlace de reinicio
          </Text>
          <FormControl id="email">
            <Input
              placeholder="tu-correo@gmail.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"purpleDark"}
              color={"white"}
              _hover={{
                bg: "#6F57D2",
              }}
            >
              Solicitar reinicio
            </Button>
            <NextLink href="/login" passHref>
              <Link color={"grayLight"}>Regresar a inicio de sesión</Link>
            </NextLink>
          </Stack>
        </Stack>
      </Flex>
    </ScaleFade>
  );
}
