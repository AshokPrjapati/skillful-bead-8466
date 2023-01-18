import CartItem from "@/components/cart/CartItem";
import CartNav from "@/components/cart/CartNav";
import {
  Text,
  Button,
  Flex,
  Image,
  Box,
  Container,
  Heading,
  Divider,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import Head from "next/head";
import PriceDetails from "@/components/cart/PriceDetails";

const Cart = ({ cartProducts }) => {
  return (
    <>
      <Head>
        <title>ApniDukan-Cart</title>
        <meta name="description" content="Apni dukan cart page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <CartNav image={"./images/s1.png"} />
        {cartProducts.length ? (
          <Container maxW={"4xl"} p={"20px 15px"}>
            <Flex>
              <Box
                w="62%"
                paddingRight="20px"
                borderRight={"1px solid #e1e1e1"}
              >
                <Heading
                  fontSize={"18px"}
                  fontWeight="500"
                  color={"#000"}
                  padding={"15px 0"}
                >
                  Cart
                  <span
                    style={{
                      color: "grey",
                      borderLeft: "1px solid gray",
                      marginLeft: "5px",
                      paddingLeft: "5px",
                    }}
                  >
                    {cartProducts.length} Items
                  </span>
                </Heading>
                {cartProducts.map((products) => (
                  <CartItem key={products.id} {...products} />
                ))}
              </Box>
              <Box w="38%">
                <PriceDetails />
              </Box>
            </Flex>
          </Container>
        ) : (
          <Flex
            width={"100%"}
            h={"85vh"}
            alignItems="center"
            justifyContent={"center"}
            flexDirection="column"
            gap="20px"
          >
            <Image
              src="https://images.meesho.com/images/pow/empty-cart.png"
              alt="empty cart"
            />
            <Text fontSize={"18px"} fontWeight={"600"}>
              Your cart is empty
            </Text>
            <Button
              color={"#f43f97"}
              size={"lg"}
              border={"1px solid #f43f97"}
              bg={"none"}
              _hover={{
                bg: "none",
              }}
            >
              View Products
            </Button>
          </Flex>
        )}
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let res = await axios.get("http://localhost:8080/cart");
  let data = await res.data;
  console.log(res);
  return {
    props: {
      cartProducts: data,
    }, // will be passed to the page component as props
  };
}

export default Cart;