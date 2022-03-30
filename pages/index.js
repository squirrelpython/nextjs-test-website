import {
  Flex,
  Box,
  Text,
  Heading,
  Button,
  Divider,
  Stack,
  Spacer,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { BsTwitter } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { useState } from "react";
import { tweets } from "../configs/tweets.js";

export default function Home() {
  const [tweet, setTweet] = useState(tweets[0]);
  function handleClick() {
    setTweet(tweets[Math.floor(Math.random() * tweets.length)]);
  }

  return (
    <VStack
      align="center"
      justify="center"
      h="100vh"
      w="full"
      bgGradient="linear(to-r, #00c6ff, #0072ff)"
    >
      <Image src="logo.png" />
      <Flex
        flexDir="column"
        width={1000}
        height={300}
        bgColor="white"
        borderBottomRadius={10}
        borderTopRadius={5}
        boxShadow="lg"
      >
        <Box bgColor="#FCF8E3" p={4} align="center" borderTopRadius={5}>
          <Text
            as="u"
            color="gray.500"
            textAlign="center"
            fontWeight="semibold"
            verticalAlign="middle"
          >
            Tweet butonuna basarak tweet atabilirsiniz, herhangi bir metin
            girmenize gerek yok.
          </Text>
        </Box>
        <Stack
          h="full"
          margin={2}
          p={4}
          border="2px"
          borderStyle="dashed"
          borderWidth="1px"
          borderColor="gray.300"
          borderRadius={5}
        >
          <Text
            as="span"
            fontSize="xl"
            h={100}
            textAlign="center"
            fontWeight="semibold"
            paddingTop="4%"
          >
            {tweet}
          </Text>
          <Spacer />
          <Divider />
          <HStack spacing={2}>
            <Button
              leftIcon={<BsTwitter />}
              as="a"
              href={`https://twitter.com/intent/tweet?text=${tweet}&hashtags=metaxlauncher,metaxlaunchertr&url=http://metaxlauncher.com`}
              target="_blank"
              maxW={100}
              maxH={50}
              bgColor="twitter.400"
              color="white"
            >
              Tweetle
            </Button>
            <Button
              leftIcon={<BiRefresh size={20} />}
              target="_blank"
              maxW={100}
              maxH={50}
              bgColor="green.400"
              color="white"
              onClick={handleClick}
            >
              Yenile
            </Button>
          </HStack>
        </Stack>
      </Flex>
    </VStack>
  );
}
